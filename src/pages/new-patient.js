import React, { Fragment } from "react";
import Frame47 from "@/components/Frame47/Frame47";
import { useAuth } from "@/hooks__/auth";

function NewPatient() {
  useAuth({ middleware: "auth" });
  return (
    <Fragment>
      <Frame47 />
    </Fragment>
  );
}

export default NewPatient;
