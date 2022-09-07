import React, { useContext, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Switch from "react-switch";
import appointmenticon from "@/images/appointment-icon.png";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import BodypartTrigger from "./MedicalhistoryformModals/BodypartTrigger";
import BodypartTypeTrigger from "./SpecificAccidentFormModals/BodypartType";
import { UserContext } from "@/context/UserContext";
import { fetcher } from "@/context/AuthContext";
import useSWR from "swr";
import SymptomsnoticedTrigger from "./CumulativeTraumaFormsModal/Symptomsnoticed";
import JobactivitiesTrigger from "./CumulativeTraumaFormsModal/JobActivities";

function CumulativeTraumaTrigger() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className={`${frame44Styles.Tab} col-md-6`}
        style={{ width: "277px" }}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add Cumulative Trauma</h4>
        </div>
      </Button>

      <CumulativeTraumaModal show={modalShow} setModalShow={setModalShow} />
    </>
  );
}

export default CumulativeTraumaTrigger;

const initialValues = {
  body_parts: [],
  body_part_type: "",
  date_of_injury: "",
  accident_description: "",
  treatment_history: "",
};
function CumulativeTraumaModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/specificaccident?patient_id=${data._id}`,
    fetcher
  );
  const [form, setForm] = useState(initialValues);
  const [checked, setChecked] = useState(false);
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
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Add Cmmulative Trauma
        </Modal.Title>
      </Modal.Header>
      <form>
        <div style={{ minHeight: "22px" }}></div>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Date of Injury:</label>
                <input type="date" style={{ width: "75%" }} />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Body Part:</label>
                <BodypartTrigger form={form} setForm={setForm} />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Body Part Type:</label>
                <BodypartTypeTrigger form={form} setForm={setForm} />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Did you work overtime?:</label>
                <Switch
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Symptoms Noticed:</label>
                <SymptomsnoticedTrigger />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Job Activities:</label>
                <JobactivitiesTrigger />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Pain when sitting, how long?</label>
                <input type="text" style={{ width: "75%" }} />
              </div>
              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Pain when walking, how long?</label>
                <input type="text" style={{ width: "75%" }} />
              </div>
              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Pain when standing, how long?</label>
                <input type="text" style={{ width: "75%" }} />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", maxWidth: "32%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Most difficult activity?</label>
                <textarea
                  cols="20"
                  rows="8"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Description of accident</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", maxWidth: "25%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Treatment History</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
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
