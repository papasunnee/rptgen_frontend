import { useRouter } from "next/router";
import useSWR from "swr";

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR(`/api/user`, () =>
    // fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user`, {
    //   mode: "no-cors",
    //   credentials: "include",
    //   headers: { "Content-Type": "application/json" },
    // }).then((res) => res.data)

    axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;

        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setErrors, ...props }) => {
    // await csrf();

    setErrors([]);

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
      });
  };

  const login = async ({ setErrors, setStatus, ...props }) => {
    setErrors([]);
    setStatus(null);

    axios
      .post("/api/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(Object.values(error.response.data.message).flat());
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    // await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/reset-password", { token: router.query.token, ...props })
      .then((response) =>
        router.push("/login?reset=" + btoa(response.data.status))
      )
      .catch((error) => {
        if (error.response.status != 422) throw error;

        setErrors(Object.values(error.response.data.errors).flat());
      });
  };

  const resendEmailVerification = ({ setStatus }) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/api/logout").then(() => mutate());
    }

    window.location.pathname = "/login";
  };

  useEffect(() => {
    if (middleware === "guest" && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated);
    if (middleware === "auth" && error) logout();
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
  };
};
