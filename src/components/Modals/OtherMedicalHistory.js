import React, { useContext, useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Switch from "react-switch";

import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";

import descriptionStyles from "../Jobdescription/jobdescription.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import AddPatientModal from "../Patients-Database/addPatientModal";
import { UserContext } from "@/context/UserContext";
import DominanthandTrigger from "./JobDescriptionformModals/DominanthandTrigger";
import TypeofjobTrigger from "./JobDescriptionformModals/TypeofjobTrigger";
import HoursperdayTrigger from "./JobDescriptionformModals/HoursperdayTrigger";
import HoursperdayTrigger2 from "./JobDescriptionformModals/HoursperdayTrigger2";
import LbsTrigger from "./JobDescriptionformModals/LbsTrigger";
import HeightTrigger from "./JobDescriptionformModals/HeightTrigger";
import FrequencyTrigger from "./JobDescriptionformModals/FrequencyTrigger";
import MaritalstatusTrigger from "./OtherpastMedicalHistory/MaritalstatusTrigger";
import LivingstatusTrigger from "./OtherpastMedicalHistory/LivingstatusTrigger";
import SmokingstatusTrigger from "./OtherpastMedicalHistory/SmokingstatusTrigger";
import AlcoholstatusTrigger from "./OtherpastMedicalHistory/AlcoholstatusTrigger";

function JobDescriptionTrigger() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div
        onClick={() => setModalShow(true)}
        className={`${frame44Styles.Tab} col-md-3`}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add other Medical History</h4>
        </div>
      </div>

      <JobDescriptionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default JobDescriptionTrigger;

const initialValues = {
  dominant_hand: "",
  job_type: "",
  employee_name: "",
  site_address: "",
  job_title: "",
  wages: "",
  hours_worked: "",
  days_worked: "",
  starting_date: "",
  last_working_date: "",
  reason: "",
  description: "",
  employment_status: "",
};

function JobDescriptionModal(props) {
  const [checked, setChecked] = useState(false);

  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/jobdescription?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
  const [patient, setPatient] = useState();
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setError(null);
    setSuccessMessage(null);
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
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
        const response = await fetch("/api/patient/jobdescription", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const functionData = await response.json();

        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("Patient Job Description Successfully Added");
          setForm(initialValues);
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Job Description Data");
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
      className={`${descriptionStyles.Modal}`}
    >
      <Modal.Header className={`${descriptionStyles.Modal_header}`} closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${descriptionStyles.Modal_title}`}
        >
          Add Other Past Medical History
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <div style={{ minHeight: "22px" }}>
          {error && <p className="bg-danger text-white p-2">{error}</p>}
          {successMessage && (
            <p className="bg-success text-white p-2">{successMessage}</p>
          )}
        </div>
        <Modal.Body>
          <div className={`${descriptionStyles.Modal_body}`}>
            <div className={`${descriptionStyles.Adl_col}`}>
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Hypertension:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Heart Disease:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Stroke:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Diabetes:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Asthma:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Emphysema:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Peptics Ulcers(Stomach):</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Kidney Disease:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Hepatitis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Thyroid:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Tumors/Cancer:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Arthritis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Osteoporosis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>High Cholesterol and Triglyceride:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}

                  {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                </div>
              </div>
            </div>

            <div className={`${descriptionStyles.Adl_col}`}>
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Hypertension:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Heart Disease:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Stroke:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Diabetes:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Asthma:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Emphysema:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Peptics Ulcers(Stomach):</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Kidney Disease:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Hepatitis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Thyroid:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Tumors/Cancer:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Arthritis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Osteoporosis:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>High Cholesterol and Triglyceride:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If yes describe briefely..."
                        name="dominant_hand"
                        value={form.dominant_hand}
                        onChange={handleChange}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>

            <div className={`${descriptionStyles.Adl_col}`}>
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px", marginRight: "21px" }}>
                      Marital Status:
                    </label>
                    <MaritalstatusTrigger />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px" }}>No. of Children:</label>
                    <input
                      type="text"
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px", marginRight: "23px" }}>
                      Living:
                    </label>
                    <LivingstatusTrigger />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px" }}>Comments:</label>
                    <input
                      type="text"
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px", marginRight: "21px" }}>
                      Smoking:
                    </label>
                    <SmokingstatusTrigger />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px" }}>
                      No. of cigarettes a day:
                    </label>
                    <input
                      type="text"
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label style={{ fontSize: "15px", marginRight: "21px" }}>
                      Alcohol:
                    </label>
                    <AlcoholstatusTrigger />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ display: "block" }}
                  >
                    <label>Description of Hospitalization:</label>
                    <textarea rows="10" cols="50" />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ display: "block" }}
                  >
                    <label>Description of Past Surgeries:</label>
                    <textarea rows="10" cols="50" />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${descriptionStyles.Adl_col}`}>
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ display: "block" }}
                  >
                    <label>Description of Past Surgeries:</label>
                    <textarea rows="10" cols="50" />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ display: "block" }}
                  >
                    <label>Description of Current Medication:</label>
                    <textarea rows="10" cols="50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "Please Wait..." : "Save"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
