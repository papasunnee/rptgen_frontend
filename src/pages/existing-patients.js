import React, { Fragment } from "react";
import ExistingPatients from "@/components/Frame44/Frame44";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Frame44() {
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
      <ExistingPatients />
    </Fragment>
  );
}

export default Frame44;
