import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import OptionselectComponent from "@/components/Optionselect/Optionselect";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

function OptionSelect() {
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
      <OptionselectComponent />
    </Fragment>
  );
}

export default OptionSelect;
