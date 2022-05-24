import React, { Fragment } from "react";
import Index from "@/components/Patients-Database/Index";
import Loading from "@/components/Loading";

function index() {
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

export default index;
