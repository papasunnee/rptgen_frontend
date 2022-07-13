import React, { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

const initialValues = {
  providers_code: "",
  providers_key: "",
};

export default function ProvidercodeModal(props) {
  const router = useRouter();
  const [patientData, setPatientData] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    setSuccess(false);
    const name = e.target.name;
    const value = e.target.value;
    setPatientData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    console.log(patientData);
    try {
      const response = await fetch("/api/patient/verifyPasscode", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...patientData,
          patient_id: props?.modalid,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setSuccess(true);
        setPatientData(initialValues);
        router.push(
          props?.redirectpath || data?.data?._id
            ? `/historian/${data?.data?._id}/demographics `
            : ""
        );
      }
    } catch (error) {
      console.log({ error: error.message });
    }
    setProcessing(false);
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          <strong>Enter Provider Code</strong>
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "18px", paddingBottom: "15px" }}>
                For existing patients, enter provider code and click button to
                load patients.
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Provider Code"
                  required
                  name="providers_code"
                  value={patientData.providers_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Provider Key</label>
                <input
                  type="password"
                  placeholder="Providers Key"
                  name="providers_key"
                  value={patientData.providers_key}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button type="submit" disabled={processing || success}>
            {processing
              ? "Please Wait..."
              : success
              ? "...loading record"
              : "Continue"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
