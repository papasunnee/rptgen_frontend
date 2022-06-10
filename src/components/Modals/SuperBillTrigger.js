import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import descriptionStyles from "../Jobdescription/jobdescription.module.scss";

function SuperBillTrigger() {
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
          <h4>Add Superbill</h4>
        </div>
      </Button>

      <SuperBillModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default SuperBillTrigger;

const initialValues = {
  initial_history_code: "",
  initial_physical_exam_code: "",
  prolonged_code: "",
  review_records: "",
  re_evaluation_code: "",
  eveluation_prolonged_code: "",
  review_records: "",
};

function SuperBillModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/superbill?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
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
        const response = await fetch("/api/patient/superbill", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const superBillData = await response.json();

        if (superBillData.success) {
          setSuccessMessage("Patient Super Bill Successfully Added");
          setForm(initialValues);
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Super Bill Data");
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
          Add Superbill
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
          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "400px" }}
          >
            <h5>Initial</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Initial Code for History</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="initial_history_code"
                  value={form.initial_history_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Initial Code for Physical Examination</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="initial_physical_exam_code"
                  value={form.initial_physical_exam_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Prolonged Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="prolonged_code"
                  value={form.prolonged_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Review of records</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="review_records"
                  value={form.review_records}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "400px" }}
          >
            <h5>Re-Evaluation</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Re-Evaluation Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="re_evaluation_code"
                  value={form.re_evaluation_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Prolonged Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="eveluation_prolonged_code"
                  value={form.eveluation_prolonged_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Review of records</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="review_records"
                  value={form.review_records}
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
