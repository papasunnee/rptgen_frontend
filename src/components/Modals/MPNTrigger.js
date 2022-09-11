import React, { useContext, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Switch from "react-switch";
import Image from "next/image";
import useSWR from "swr";
import { Modal } from "react-bootstrap";
import appointmenticon from "@/images/appointment-icon.png";
import frame44Styles from "../Frame44/Frame44.module.scss";

import descriptionStyles from "../Jobdescription/jobdescription.module.scss";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";

function MPNTrigger() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        onClick={() => setModalShow(true)}
        className={`${frame44Styles.Tab} col-md-6`}
        style={{
          width: "277px",
          background: "#fff",
          color: "#000",
          cursor: "pointer",
        }}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Add MPN</h4>
        </div>
      </div>

      <MPNModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default MPNTrigger;

const initialValues = {
  injury_report_to_employer_boolean: false,
  injury_report_to_employer_text: "",
  injury_report_date: "",
  person_reported_to: "",
  filled_claim_form_boolean: false,
  filled_claim_form_date: "",
  employer_provide_doctor_boolean: false,
  days_doctor_provided: "",
  days_doctor_provided_b: "",
  provide_doctor_after_boolean: false,
  provide_doctor_closer_boolean: false,
  provide_doctor_closer_text: "",
  days_emergency_doctor_provided: "",
  things_doctor_provided: "",
  increased_pain_when_driving_home_boolean: false,
  doctor_ignore_body_on_claim_form_boolean: false,
  prescribed_treatment_not_given_boolean: false,
  type_of_treatment_not_given_: "",
  prescribed_treatment_late_boolean: false,
  days_after_treatment_began: "",
  dcotor_neglect_boolean: false,
};

function MPNModal(props) {
  const [checked, setChecked] = useState(false);
  const [otherHistory, setOtherHistory] = useState([...OtherHistory]);
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/otherpastmedicalhistory?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(null);
    setSuccessMessage(null);

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChecked = (label) => {
    setForm((prev) => ({
      ...prev,
      [label]: !form[label],
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
      const arrayCopy = [...otherHistory];
      const historyObject = {};
      arrayCopy.forEach((item) => {
        historyObject[item.name] = item.value;
      });
      try {
        const response = await fetch("/api/patient/otherpastmedicalhistory", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            ...historyObject,
            patient_id: data._id,
          }),
        });
        const functionData = await response.json();

        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("MPN Data Successfully Added");
          setForm(initialValues);
          setOtherHistory([...OtherHistory]);
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create MPN Data");
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
          Add MPN
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
          <div style={{ marginBottom: "3%", marginTop: "-2%" }}>
            <h3 style={{ fontSize: "20px" }}>MPN Questionnaire</h3>
          </div>

          <div className={`${descriptionStyles.Modal_body}`}>
            <div
              className={`${descriptionStyles.Adl_col}`}
              style={{ width: "100%" }}
            >
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      1&#41; Did you report your injury to your employer?
                    </label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() =>
                        handleChecked("injury_report_to_employer_boolean")
                      }
                      checked={form.injury_report_to_employer_boolean}
                    />
                  </div>

                  {form.injury_report_to_employer_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Comments"
                        name="injury_report_to_employer_text"
                        value={form.injury_report_to_employer_text}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>2&#41; When did you report the injury?</label>
                  <input
                    type="date"
                    name="injury_report_date"
                    value={form.injury_report_date}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    3&#41; To whom did you report the injury? &#40;Include
                    his/her title. E.g. John Doe, Supervisor&#41;
                  </label>

                  <input
                    type="text"
                    name="person_reported_to"
                    value={form.person_reported_to}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      Did your employer give you a claim form or fill out a
                      claim for for you?
                    </label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() =>
                        handleChecked("filled_claim_form_boolean")
                      }
                      checked={form.filled_claim_form_boolean}
                    />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>If yes, when?</label>
                  <input
                    type="date"
                    name="filled_claim_form_date"
                    value={form.filled_claim_form_date}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>Did your employer provide a doctor for you?:</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() =>
                        handleChecked("employer_provide_doctor_boolean")
                      }
                      checked={form.employer_provide_doctor_boolean}
                    />
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    How many days after you report your injury that a doctor was
                    provided?
                  </label>
                  <input
                    type="number"
                    min="0"
                    placeholder="19"
                    name="days_doctor_provided"
                    value={form.days_doctor_provided}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="Days/week/months"
                    name="days_doctor_provided_b"
                    value={form.days_doctor_provided_b}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      Did the insurance company or your employer provide a
                      doctor whose office is 30 minutes or 15 miles from your
                      home or work place?{" "}
                    </label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() =>
                        handleChecked("provide_doctor_closer_boolean")
                      }
                      checked={form.provide_doctor_closer_boolean}
                    />
                  </div>

                  {form.provide_doctor_closer_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Comments"
                        name="provide_doctor_closer_text"
                        value={form.provide_doctor_closer_text}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${descriptionStyles.Adl_col}`}
              style={{ width: "100%" }}
            >
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      9&#41; If you were taken to the emergency room, did your
                      employer provide a doctor for you after you left the
                      hospital?
                    </label>
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
                        placeholder="Comments"
                        name="dominant_hand"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    10&#41; How many days after you left the emergency room a
                    doctor was provided for follow-up?
                  </label>
                  <input
                    type="text"
                    placeholder="Select No. of days"
                    name="dominant_hand"
                  />

                  <input
                    type="text"
                    placeholder="Days/week/months"
                    name="dominant_hand"
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    11&#41; What did the doctor provide you for 30 minutes or 15
                    miles from your home or workplace?
                  </label>

                  <input type="text" name="dominant_hand" />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      12&#41; Did you have increased pain when driving more than
                      30 minutes or 15 miles from your home or workplace?
                    </label>
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
                        placeholder="Comments"
                        name="dominant_hand"
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
                    <label>
                      13&#41; Did the doctor you were sent to ignore the body
                      parts you have injured that is on your claim form?
                      &#40;Indicate the body parts&#41;
                    </label>
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
                        placeholder="Enter body parts here"
                        name="dominant_hand"
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
                    <label>
                      14&#41; Did the doctor prescribe treatment but was not
                      given?
                    </label>
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
                        placeholder="Enter body parts here"
                        name="dominant_hand"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>

            <div
              className={`${descriptionStyles.Adl_col}`}
              style={{ width: "100%" }}
            >
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    15&#41; What kind of treatment that was not given?
                  </label>
                  <input
                    type="text"
                    placeholder="Select kind of treatment that was not given?"
                    name="dominant_hand"
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>
                      16&#41; If the doctor you were sent to prescribed
                      treatment, was it late?
                    </label>
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
                        placeholder="Comments"
                        name="dominant_hand"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    17&#41; If yes, how many days after you saw the doctor, the
                    treatment begin?
                  </label>
                  <input
                    type="text"
                    placeholder="Select No. of days"
                    name="dominant_hand"
                  />

                  <input
                    type="text"
                    placeholder="Days/week/months"
                    name="dominant_hand"
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    {/* <label>18&#41; Is the doctor's treatment effective?</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    /> */}
                  </div>

                  {checked ? (
                    <div>
                      <input
                        type="text"
                        placeholder="If NO please explain briefly"
                        name="dominant_hand"
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
                    <label>
                      19&#41; Did the doctor you were sent to neglect or refuse
                      to treat you?
                    </label>
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
                        placeholder="If NO please explain briefly"
                        name="dominant_hand"
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
                    {/* <label>20&#41; Did your employer post notices at your workplace in both English and Spanish, or English and Chinese, and other languages which informed you of your rights under the California's Workers Compensation Laws?</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    /> */}
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

const OtherHistory = [
  {
    id: 0,
    label: "Hypertension",
    name: "hypertension",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 1,
    label: "Heart Disease",
    name: "heart_disease",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 2,
    label: "Stroke",
    name: "stroke",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 3,
    label: "Diabetes",
    name: "diabetes",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 4,
    label: "Asthma",
    name: "asthma",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 5,
    label: "Emphysema",
    name: "emphysema",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 6,
    label: "Peptics Ulcers(Stomach)",
    name: "peptics_ulcers",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 7,
    label: "Kidney Disease",
    name: "kidney_disease",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 8,
    label: "Hepatitis",
    name: "hepatitis",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 9,
    label: "Thyroid",
    name: "thyroid",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 10,
    label: "Tumors/Cancer",
    name: "tumors_cancer",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 11,
    label: "Arthritis",
    name: "arthritis",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 12,
    label: "Osteoporosis",
    name: "osteoporosis",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 13,
    label: "High Cholesterol and Triglyceride",
    name: "high_cholesterol_and_triglyceride",
    value: "",
    checked: false,
    group: "a",
  },
  {
    id: 14,
    label: "Hypertension",
    name: "hypertension_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 15,
    label: "Heart Disease",
    name: "heart_disease_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 16,
    label: "Stroke",
    name: "stroke_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 17,
    label: "Diabetes",
    name: "diabetes_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 18,
    label: "Asthma",
    name: "asthma_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 19,
    label: "Emphysema",
    name: "emphysema_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 20,
    label: "Peptics Ulcers(Stomach)",
    name: "peptics_ulcers_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 21,
    label: "Kidney Disease",
    name: "kidney_disease_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 22,
    label: "Hepatitis",
    name: "hepatitis_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 23,
    label: "Thyroid",
    name: "thyroid_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 24,
    label: "Tumors/Cancer",
    name: "tumors_cancer_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 25,
    label: "Arthritis",
    name: "arthritis_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 26,
    label: "Osteoporosis",
    name: "osteoporosis_b",
    value: "",
    checked: false,
    group: "b",
  },
  {
    id: 27,
    label: "High Cholesterol and Triglyceride",
    name: "high_cholesterol_and_triglyceride_b",
    value: "",
    checked: false,
    group: "b",
  },
];
