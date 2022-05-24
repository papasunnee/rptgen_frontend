import React, { Fragment } from "react";
import Index from "@/components/Patients-Database/Index";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function PatientDatabase() {
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
      <Index />
    </Fragment>
  );
}

export default PatientDatabase;
