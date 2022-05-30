import React from "react";
import Image from "next/image";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "./Frame44.module.scss";
import { fetcher } from "@/context/AuthContext";
import useSWR from "swr";

function AppointmentStat() {
  const { data, error, isValidating, mutate } = useSWR(
    "/api/appointment",
    fetcher
  );
  console.log(data);
  return (
    <div className={`${frame44Styles.Tab} col-md-3`}>
      <div className={`${frame44Styles.Image}`}>
        <Image src={appointmenticon} alt="icon-img" />
      </div>

      <div className={`${frame44Styles.Content}`}>
        <h4>Appointment</h4>
        <h3>{data?.data?.appointments?.length || 0}</h3>
      </div>
    </div>
  );
}

export default AppointmentStat;
