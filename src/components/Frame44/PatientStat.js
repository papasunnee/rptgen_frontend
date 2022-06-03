import React from "react";
import Image from "next/image";

import newpatientsicon from "@/images/newpatients-icon.png";

import frame44Styles from "./Frame44.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";

function PatientStat() {
  const { data, error, isValidating, mutate } = useSWR("/api/patient", fetcher);
  console.log({ patientdata: data });
  return (
    <div className={`${frame44Styles.Tab} col-md-3`}>
      <div className={`${frame44Styles.Image}`}>
        <Image src={newpatientsicon} alt="icon-img" />
      </div>

      <div className={`${frame44Styles.Content}`}>
        <h4>New Patients</h4>
        <h3>{data?.data?.recentPatients?.length || 0}</h3>
      </div>
    </div>
  );
}

export default PatientStat;
