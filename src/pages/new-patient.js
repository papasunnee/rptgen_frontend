import React, { Fragment, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Frame47 from "@/components/Frame47/Frame47";
import Loading from "@/components/Loading";

function NewPatient() {
  const { userSWR, errorSWR, mutate, isValidating } = useAuth();
  const isLoading = !userSWR && !errorSWR;

  const router = useRouter();

  useEffect(() => {
    if (!isValidating && typeof userSWR != "undefined" && !userSWR.isLoggedIn) {
      mutate();
      router.replace("/");
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  // if (typeof userSWR !== "undefined" && !userSWR.isLoggedIn) {
  //   mutate();
  //   return router.push("/");
  // }
  return (
    <Fragment>
      <Frame47 />
    </Fragment>
  );
}

export default NewPatient;
