import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import TypeofworkTrigger from "./MedicalhistoryformModals/TypeofworkTrigger";
import BodypartTrigger from "./MedicalhistoryformModals/BodypartTrigger";
import TypeoftreatmentTrigger from "./MedicalhistoryformModals/TypeoftreatmentTrigger";

function PastMedicalHistoryTrigger() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className={`${frame44Styles.Tab} col-md-3`}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add Medical History</h4>
        </div>
      </Button>

      <PastMedicalHistoryModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default PastMedicalHistoryTrigger;

const initialValues = {
  work_type: "",
  body_parts: [],
  injury_date: new Date(),
  treatment_types: [],
  injury_mechanism: "",
  fully_recovered: false,
};

function PastMedicalHistoryModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/pastmedicalhistory?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(null);
    setSuccessMessage(null);
    const name = e.target.name;
    if (name == "fully_recovered") {
      const checked = e.target.checked;
      setForm((prevValues) => ({
        ...prevValues,
        [name]: checked,
      }));
    } else {
      const value = e.target.value;
      setForm((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form).every(
      (item) => item === null || item === ""
    );
    if (!isEmpty) {
      try {
        const response = await fetch("/api/patient/pastmedicalhistory", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const pastMedicalHistory = await response.json();
        console.log(pastMedicalHistory);
        if (pastMedicalHistory.success) {
          setForm(initialValues);
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("Patient Past Medical History Successfully Added");
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Past Medical History Data");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
      setError("Please Fill at least one field");
    }
    setLoading(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Add Medical History
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <div style={{ minHeight: "22px" }}>
          {error && <p className="bg-danger text-white p-2">{error}</p>}
          {successMessage && (
            <p className="bg-success text-white p-2">{successMessage}</p>
          )}
        </div>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Type</label>
                <TypeofworkTrigger form={form} setForm={setForm} />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Body Part</label>
                <BodypartTrigger form={form} setForm={setForm} />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Injury</label>
                <input
                  type="date"
                  placeholder="Eg. your text here"
                  name="injury_date"
                  value={form.injury_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Type of Treatment</label>
                <TypeoftreatmentTrigger form={form} setForm={setForm} />
                {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="treatment_type"
                  value={form.treatment_type}
                  onChange={handleChange}
                /> */}
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "370px" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="fully_recovered"
                    checked={form.fully_recovered}
                    onChange={(e) => handleChange(e)}
                    style={{ width: "20px" }}
                  />{" "}
                  Fully Recovered
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Mechanism of Injury</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
                  value={form.injury_mechanism}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "Please Wait..." : "Save"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
