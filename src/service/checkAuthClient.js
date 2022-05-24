import AuthContext, { fetcher } from "context/AuthContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import useSWR from "swr";
import Loading from "~html/Loading";

const withAuth = (Component, ctx) => {
  const Auth = (props) => {
    const { user } = useContext(AuthContext);
    const { data, isValidating } = useSWR("/api/isLoggedIn", fetcher);
    const router = useRouter();

    if (isValidating) {
      return <Loading />;
    }
    if (data.isLoggedIn) {
      return <Component {...props} user={user} />;
    } else {
      router.push("/auth/login");
      return null;
    }
  };
  return Auth;
};

export default withAuth;
