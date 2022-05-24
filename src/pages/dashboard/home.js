import React, { Fragment, useEffect } from "react";
import ExistingPatients from "@/components/Frame44/Frame44";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Frame44() {
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

  return (
    <Fragment>
      <ExistingPatients />
    </Fragment>
  );
}

export default Frame44;
