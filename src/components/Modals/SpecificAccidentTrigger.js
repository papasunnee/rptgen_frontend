import React, { useContext, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import BodypartTrigger from "./MedicalhistoryformModals/BodypartTrigger";
import BodypartTypeTrigger from "./SpecificAccidentFormModals/BodypartType";
import { UserContext } from "@/context/UserContext";
import { fetcher } from "@/context/AuthContext";
import useSWR from "swr";

function SpecificAccidentTrigger() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className={`${frame44Styles.Tab} col-md-3`}
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add Specific Accident</h4>
        </div>
      </Button>

      <SpecificAccidentModal show={modalShow} setModalShow={setModalShow} />
    </>
  );
}

export default SpecificAccidentTrigger;

const initialValues = {
  body_parts: [],
  body_part_type: "",
  date_of_injury: "",
  accident_description: "",
  treatment_history: "",
};
function SpecificAccidentModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/specificaccident?patient_id=${data._id}`,
    fetcher
  );
  const [form, setForm] = useState(initialValues);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        const response = await fetch("/api/patient/specificaccident", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const specificAccident = await response.json();
        console.log(specificAccident);
        if (specificAccident.success) {
          setForm(initialValues);
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage(
            "Patient Specific Accident Data Successfully Added"
          );
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Patient Specific Accident Data");
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
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
      onHide={() => {
        setForm(initialValues);
        props.setModalShow(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Add Specific Accident
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <div style={{ minHeight: "22px" }}></div>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", width: "50%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Body Part:</label>
                <BodypartTrigger form={form} setForm={setForm} />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Injury:</label>
                <input
                  type="date"
                  className="form-control"
                  aria-label="Date of Injury"
                  name="date_of_injury"
                  value={form.date_of_injury}
                  onChange={handleChange}
                  style={{ width: "90%" }}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Body Part Type</label>
                <br />
                <BodypartTypeTrigger form={form} setForm={setForm} />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Description of Accident</label>
                <textarea
                  cols="20"
                  rows="8"
                  placeholder="Eg. your text here"
                  name="accident_description"
                  value={form.accident_description}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", width: "50%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Treatment History</label>
                <textarea
                  cols="20"
                  rows="8"
                  placeholder="Eg. your text here"
                  name="treatment_history"
                  value={form.treatment_history}
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
