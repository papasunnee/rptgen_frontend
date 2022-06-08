import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import descriptionStyles from "../Jobdescription/jobdescription.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import AddPatientModal from "../Patients-Database/addPatientModal";
import { UserContext } from "@/context/UserContext";

function BillReductionTrigger() {
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
          <h4>Add Bill Reduction</h4>
        </div>
      </Button>

      <BillReductionModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default BillReductionTrigger;

const initialValues = {
  body_part: "",
  injury_date: "",
  treatment_type: "",
  injury_mechanism: "",
};

function BillReductionModal(props) {
  const data = useContext(UserContext);
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
        const response = await fetch("/api/patient/billreduction", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const superBillData = await response.json();

        if (superBillData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("Patient Super Bill Successfully Added");
          setForm(initialValues);
          setTimeout(() => setSuccessMessage(null), 5000);
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
          New Bill Reduction
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
                <input type="text" placeholder="Eg. your text here" />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Body Part</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="body_part"
                  value={form.body_part}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Injury</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="injury_date"
                  value={form.injury_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Type of Treatment</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="treatment_type"
                  value={form.treatment_type}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "370px" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <input type="checkbox" style={{ width: "20px" }} />
                <label>Fully Recovered</label>
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
