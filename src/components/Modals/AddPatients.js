import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import AddPatientModal from "../Patients-Database/addPatientModal";

function AddPatient() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        className={`${frame44Styles.Tab} col-md-5`}
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => setModalShow(true)}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add Patient</h4>
        </div>
      </div>

      <AddPatientModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default AddPatient;
