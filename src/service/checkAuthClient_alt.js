import AuthContext, { fetcher } from "context/AuthContext";
import { useRouter } from "next/router";
import { useContext } from "react";
import useSWR from "swr";

const withAuth = (Component, ctx) => {
  const Auth = (props) => {
    const { user } = useContext(AuthContext);
    const { data, isValidating, error, mutate } = useSWR(
      "/api/isLoggedIn",
      fetcher
    );

    if (!isValidating && (!data.isLoggedIn || error)) {
      mutate();
      return (window.location.pathname = "/auth/login");
    }
    return <Component {...props} user={user} />;
  };
  return Auth;
};

export default withAuth;
