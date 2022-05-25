import React, { Fragment, useEffect } from "react";
import Appointment from "@/components/Appoinments/Index";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Index() {
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
      <Appointment />
    </Fragment>
  );
}

export default Index;
