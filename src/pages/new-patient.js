import React, { Fragment } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Frame47 from "@/components/Frame47/Frame47";
import Loading from "@/components/Loading";

function NewPatient() {
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
      <Frame47 />
    </Fragment>
  );
}

export default NewPatient;
