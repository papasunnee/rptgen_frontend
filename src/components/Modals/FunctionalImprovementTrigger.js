import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import PhysicalactivityTrigger from "../Modals/FunctionalImprovementformModals/PhysicalactivityTrigger";

function FunctionalImprovementTrigger() {
  const [modalShow, setModalShow] = React.useState(false);
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
          <h4>Add Functional Improvement</h4>
        </div>
      </Button>

      <FunctionalImprovementModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default FunctionalImprovementTrigger;

const initialValues = {
  physical_activity: "",
  sensory_function: "",
  non_specialized_hand: "",
  travel: "",
  sexual_function: "",
  sleep: "",
  self_care: "",
  communication: "",
  description: "",
};

const initialCheckBoxes = {
  value_a: false,
  value_b: false,
  value_c: false,
  value_d: false,
  value_e: false,
  value_f: false,
  value_g: false,
};

function FunctionalImprovementModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/functional?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
  const [patient, setPatient] = useState();
  const [form, setForm] = useState(initialValues);
  const [checkboxes, setCheckBoxes] = useState(initialCheckBoxes);
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

  const handleCheckboxes = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setCheckBoxes((prevValues) => ({
      ...prevValues,
      [name]: checked,
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
        const response = await fetch("/api/patient/functional", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            ...checkboxes,
            patient_id: data._id,
          }),
        });
        const functionData = await response.json();
        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage(
            "Patient Functional Improvement Successfully Added"
          );
          setForm(initialValues);
          setCheckBoxes(initialCheckBoxes);
          setSuccessMessage(null);
          mutate();
          setTimeout(() => {
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Functional Improvement Data");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      global.window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
          Add Functional improvement
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Functionalimprovment_col}`}>
            <div style={{ minHeight: "22px" }}>
              {error && <p className="bg-danger text-white p-2">{error}</p>}
              {successMessage && (
                <p className="bg-success text-white p-2">{successMessage}</p>
              )}
            </div>
            <h5>Functional Improvement</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_a"
                    checked={checkboxes.value_a}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span>
                    {" "}
                    Are you using assisted ambulations or activity aids?
                  </span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_b"
                    checked={checkboxes.value_b}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Do you require assistance at home or at work?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_c"
                    checked={checkboxes.value_c}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Is your ongoing care stopped?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_d"
                    checked={checkboxes.value_d}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Is there a re-injury</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_e"
                    checked={checkboxes.value_e}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Do you experience increase is symptoms?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_f"
                    checked={checkboxes.value_f}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Sports</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_g"
                    checked={checkboxes.value_g}
                    onChange={(e) => handleCheckboxes(e)}
                  />
                  <span> Are you taking medication?</span>
                </label>
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`} style={{ width: "340px" }}>
            <h5>Activities of Daily Living (ADL)</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                {/* <label>Phyisical Activity</label> */}

                <PhysicalactivityTrigger />
                {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="physical_activity"
                  value={form.physical_activity}
                  onChange={handleChange}
                /> */}
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sensory Function</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sensory_function"
                  value={form.sensory_function}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Non-specialized hand activities</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="non_specialized_hand"
                  value={form.non_specialized_hand}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Travel</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="travel"
                  value={form.travel}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sexual Function</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sexual_function"
                  value={form.sexual_function}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sleep</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sleep"
                  value={form.sleep}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`} style={{ width: "340px" }}>
            <h5>Activities of Daily Living (ADL)</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Self-care, personal hygiene</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="self_care"
                  value={form.self_care}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Communication</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="communication"
                  value={form.communication}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Description</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="description"
                  value={form.description}
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
