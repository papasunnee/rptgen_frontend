import React, { useContext, useEffect, useState } from "react";
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

function JobDescriptionTrigger() {
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
          <h4>Add Job Description</h4>
        </div>
      </Button>

      <JobDescriptionModal
        show={modalShow}
        onHide={() => setModalShow(false)}
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
          setTimeout(() => setSuccessMessage(null), 5000);
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
          Add Job Description
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <div className={`${descriptionStyles.Formtab_titles}`}>
          <div
            className={`${descriptionStyles.Formtab_titles}`}
            style={{ padding: 0 }}
          >
            <div className={`${descriptionStyles.Tab}`}>
              <h4>Main</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4 style={{ color: "#336CFB" }}>Activity (Hours per day)</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Other History</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Pre-injury Lifting Capacity</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Other Details</h4>
            </div>
          </div>
        </div>
        <div style={{ minHeight: "22px" }}>
          {error && <p className="bg-danger text-white p-2">{error}</p>}
          {successMessage && (
            <p className="bg-success text-white p-2">{successMessage}</p>
          )}
        </div>
        <Modal.Body className={`${descriptionStyles.Modal_body}`}>
          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Dominant Hand</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Type of Job</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Employee Name</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="employee_name"
                  value={form.employee_name}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Work Site Address</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="site_address"
                  value={form.site_address}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_title"
                  value={form.job_title}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Wages</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="wages"
                  value={form.wages}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Hrs. Worked Per Days</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="hours_worked"
                  value={form.hours_worked}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Days Worked for week</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="days_worked"
                  value={form.days_worked}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Start Working Date</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="starting_date"
                  value={form.starting_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Last Working Date</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="last_working_date"
                  value={form.last_working_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Reason</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
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

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>New/Current Employment</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="employment_status"
                  value={form.employment_status}
                  onChange={handleChange}
                />
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
