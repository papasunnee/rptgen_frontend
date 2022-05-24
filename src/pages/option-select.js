import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import OptionselectComponent from "@/components/Optionselect/Optionselect";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

function OptionSelect() {
  const { user, loading } = useAuth();
  const router = useRouter();

  console.log({ user, loading });

  useEffect(() => {
    if (loading == false && !user) {
      router.push("/");
    }
  }, [user]);

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <Fragment>
      <OptionselectComponent />
    </Fragment>
  );
}

export default OptionSelect;
