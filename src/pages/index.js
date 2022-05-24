import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/Login/Login";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { mutate } from "swr";

function Index(props) {
  const { userSWR, isValidating, mutate } = useAuth();
  const router = useRouter();

  if (isValidating) {
    return <Loading />;
  }

  if (!isValidating && typeof userSWR !== "undefined" && userSWR.isLoggedIn) {
    mutate();
    router.push("/option-select");
  }
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default Index;
