import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/Login/Login";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";

function Index() {
  const { loading, user } = useAuth();
  const router = useRouter();
  console.log({ loading, user });
  useEffect(() => {
    if (loading == false && user && user != null) {
      router.push("/option-select");
    }
  }, [user, loading]);

  if (
    loading == true &&
    typeof loading != undefined &&
    (!user || user == null)
  ) {
    console.log("hehehe");
    return <Loading />;
  }
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

export default Index;
