import AuthContext, { fetcher } from "context/AuthContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import useSWR from "swr";
import Loading from "~html/Loading";

const withoutAuth = (Component) => {
  const Auth = (props) => {
    // const { user, loading } = useContext(oadin);
    const { data, isValidating } = useSWR("/api/isLoggedIn", fetcher);
    console.log({ data });
    const router = useRouter();
    if (isValidating) return <Loading />;
    if (!data.isLoggedIn) {
      return <Component {...props} />;
    } else {
      if (typeof window !== "undefined") {
        return (window.document.location = "/dashboard/courses");
      } else {
        return router.replace("/dashboard/courses");
      }
    }
  };
  return Auth;
};

export default withoutAuth;
