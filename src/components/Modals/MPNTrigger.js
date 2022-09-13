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
  provide_doctor_after_text: "",
  provide_doctor_closer_boolean: false,
  provide_doctor_closer_text: "",
  days_emergency_doctor_provided: "",
  days_emergency_doctor_provided_b: "",
  things_doctor_provided: "",
  increased_pain_when_driving_home_boolean: false,
  increased_pain_when_driving_home_text: "",
  doctor_ignore_body_on_claim_form_boolean: false,
  doctor_ignore_body_on_claim_form_text: "",
  prescribed_treatment_not_given_boolean: false,
  prescribed_treatment_not_given_text: "",
  type_of_treatment_not_given: "",
  prescribed_treatment_late_boolean: false,
  prescribed_treatment_late_text: "",
  days_after_treatment_began: "",
  days_after_treatment_began_b: "",
  effective_treatment_boolean: false,
  effective_treatment_text: "",
  dcotor_neglect_boolean: false,
  dcotor_neglect_text: "",
};

function MPNModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(`/api/patient/mpn?patient_id=${data._id}`, fetcher);
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
      (item) => item === null || item === "" || item === false
    );
    if (!isEmpty) {
      try {
        const response = await fetch("/api/patient/mpn", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            patient_id: data._id,
          }),
        });
        const functionData = await response.json();

        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("MPN Data Successfully Added");
          setForm(initialValues);
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
                      onChange={() =>
                        handleChecked("provide_doctor_after_boolean")
                      }
                      checked={form.provide_doctor_after_boolean}
                    />
                  </div>

                  {form.provide_doctor_after_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Comments"
                        name="provide_doctor_after_text"
                        value={form.provide_doctor_after_text}
                        onChange={handleChange}
                      />
                    </div>
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
                    name="days_emergency_doctor_provided"
                    value={form.days_emergency_doctor_provided}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="Days/week/months"
                    name="days_emergency_doctor_provided_b"
                    value={form.days_emergency_doctor_provided_b}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <label>
                    11&#41; What did the doctor provide you for 30 minutes or 15
                    miles from your home or workplace?
                  </label>

                  <input
                    type="text"
                    name="things_doctor_provided"
                    value={form.things_doctor_provided}
                    onChange={handleChange}
                  />
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
                      onChange={() =>
                        handleChecked(
                          "increased_pain_when_driving_home_boolean"
                        )
                      }
                      checked={form.increased_pain_when_driving_home_boolean}
                    />
                  </div>

                  {form.increased_pain_when_driving_home_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Comments"
                        name="increased_pain_when_driving_home_text"
                        value={form.increased_pain_when_driving_home_text}
                        onChange={handleChange}
                      />
                    </div>
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
                      onChange={() =>
                        handleChecked(
                          "doctor_ignore_body_on_claim_form_boolean"
                        )
                      }
                      checked={form.doctor_ignore_body_on_claim_form_boolean}
                    />
                  </div>

                  {form.doctor_ignore_body_on_claim_form_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter body parts here"
                        name="doctor_ignore_body_on_claim_form_text"
                        value={form.doctor_ignore_body_on_claim_form_text}
                        onChange={handleChange}
                      />
                    </div>
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
                      onChange={() =>
                        handleChecked("prescribed_treatment_not_given_boolean")
                      }
                      checked={form.prescribed_treatment_not_given_boolean}
                    />
                  </div>

                  {form.prescribed_treatment_not_given_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Enter body parts here"
                        name="prescribed_treatment_not_given_text"
                        value={form.prescribed_treatment_not_given_text}
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
                  <label>
                    15&#41; What kind of treatment that was not given?
                  </label>
                  <input
                    type="text"
                    placeholder="Select kind of treatment that was not given?"
                    name="type_of_treatment_not_given"
                    value={form.type_of_treatment_not_given}
                    onChange={handleChange}
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
                      onChange={() =>
                        handleChecked("prescribed_treatment_late_boolean")
                      }
                      checked={form.prescribed_treatment_late_boolean}
                    />
                  </div>

                  {form.prescribed_treatment_late_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="Comments"
                        name="prescribed_treatment_late_text"
                        value={form.prescribed_treatment_late_text}
                        onChange={handleChange}
                      />
                    </div>
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
                    name="days_after_treatment_began"
                    value={form.days_after_treatment_began}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    placeholder="Days/week/months"
                    name="days_after_treatment_began_b"
                    value={form.days_after_treatment_began_b}
                    onChange={handleChange}
                  />
                </div>

                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div
                    className={`${descriptionStyles.Label_checkbox_con}`}
                    style={{ justifyContent: "space-between" }}
                  >
                    <label>18&#41; Is the doctors treatment effective?</label>
                    <Switch
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onChange={() =>
                        handleChecked("effective_treatment_boolean")
                      }
                      checked={form.effective_treatment_boolean}
                    />
                  </div>

                  {form.effective_treatment_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="If NO please explain briefly"
                        name="effective_treatment_text"
                        value={form.effective_treatment_text}
                        onChange={handleChange}
                      />
                    </div>
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
                      onChange={() => handleChecked("dcotor_neglect_boolean")}
                      checked={form.dcotor_neglect_boolean}
                    />
                  </div>

                  {form.dcotor_neglect_boolean && (
                    <div>
                      <input
                        type="text"
                        placeholder="If NO please explain briefly"
                        name="dcotor_neglect_text"
                        value={form.dcotor_neglect_text}
                        onChange={handleChange}
                      />
                    </div>
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
