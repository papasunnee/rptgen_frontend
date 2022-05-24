import React, { Fragment, useEffect } from "react";
import ExistingPatients from "@/components/Frame44/Frame44";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Frame44() {
  const { userSWR, isValidating, mutate } = useAuth();
  const router = useRouter();

  if (isValidating) {
    return <Loading />;
  }

  if (!isValidating && typeof userSWR !== "undefined" && !userSWR.isLoggedIn) {
    mutate();
    router.push("/");
  }

  return (
    <Fragment>
      <ExistingPatients />
    </Fragment>
  );
}

export default Frame44;
