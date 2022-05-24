import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import OptionselectComponent from "@/components/Optionselect/Optionselect";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

function OptionSelect() {
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
      <OptionselectComponent />
    </Fragment>
  );
}

export default OptionSelect;
