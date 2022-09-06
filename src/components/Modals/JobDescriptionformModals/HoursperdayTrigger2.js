import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { HoursperdayModal } from "./HoursperdayTrigger";

function HoursperdayTrigger2({ form, setForm, field_left, field_right }) {
  const [modalShow, setModalShow] = useState(false);
  const [field, setField] = useState(null);
  return (
    <>
      <div
        className={`${frame44Styles.Selectinput} col-md-3`}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <input
          type="text"
          placeholder="Left Hand"
          name="physical_activity"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={form[field_left]}
          onClick={() => {
            setField(field_left);
            setModalShow(true);
          }}
          readOnly
          style={{ width: "45%" }}
        />

        <input
          type="text"
          placeholder="Right Hand"
          name="physical_activity"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={form[field_right]}
          onClick={() => {
            setField(field_right);
            setModalShow(true);
          }}
          readOnly
          style={{ width: "45%" }}
        />
      </div>

      <HoursperdayModal
        show={modalShow}
        field={field}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default HoursperdayTrigger2;
