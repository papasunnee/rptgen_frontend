import React, { useContext, useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
          Add Job Description
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>

        <Tabs>

          <div className={`${descriptionStyles.Formtab_titles}`}>
            <TabList
              className={`${descriptionStyles.Formtab_titles}`}
              style={{ padding: 0 }}
            >
              <Tab className={`${descriptionStyles.Tab}`}>
                Main
              </Tab>

              <Tab className={`${descriptionStyles.Tab}`}>
                Activity (Hours per day)
              </Tab>

              <Tab className={`${descriptionStyles.Tab}`}>
                Pre-injury Lifting Capacity
              </Tab>

              <Tab className={`${descriptionStyles.Tab}`}>
                Other Details
              </Tab>
            </TabList>
          </div>

          <div style={{ minHeight: "22px" }}>
            {error && <p className="bg-danger text-white p-2">{error}</p>}
            {successMessage && (
              <p className="bg-success text-white p-2">{successMessage}</p>
            )}
          </div>
          <Modal.Body>
            <TabPanel className={`${descriptionStyles.Modal_body}`}>
              <div className={`${descriptionStyles.Adl_col}`}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Dominant Hand</label>
                    <DominanthandTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Type of Job</label>
                    <TypeofjobTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
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
            </TabPanel>

            <TabPanel className={`${descriptionStyles.Modal_body}`}>
              <div className={`${descriptionStyles.Adl_col}`}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Sitting/Sentence</label>
                    <div>
                      <HoursperdayTrigger />
                    </div>
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Walking</label>
                    <HoursperdayTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Standing/De Pie</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Bending(neck)/Agachar(cuello)</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Bending(waist)/Agachar(cintura)</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Squatting/En Cuclillias</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Climbing/Escalar</label>
                    <HoursperdayTrigger />
                  </div>
                </div>
              </div>

              <div className={`${descriptionStyles.Adl_col}`}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Kneeling/Arrodillarse</label>
                    <HoursperdayTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Crawling/Gatear</label>
                    <HoursperdayTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Turning(neck)/Reforcer el cuello</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Twisting(waist)/Reforcer la cintura</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Reaching(above shoulder level)</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Reaching(below shoulder level)</label>
                    <HoursperdayTrigger />
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Repetetive use of hand</label>
                    <HoursperdayTrigger />
                  </div>
                </div>
              </div>

              <div className={`${descriptionStyles.Adl_col}`} style={{ width: "350px" }}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Simple Grasping</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Power Grasping</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Fine Manipulation (Manipulation Precisa):</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Pushing and Pulling (Empujary y Jalar)</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="site_address"
                      value={form.site_address}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Reaching Above Shoulder</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="job_title"
                      value={form.job_title}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Keyboarding: Mouse Use:</label>
                    {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="wages"
                      value={form.wages}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label>Power Grasping</label>
                    <HoursperdayTrigger2 />
                    {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="wages"
                      value={form.wages}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className={`${descriptionStyles.Modal_body}`}>
              <div className={`${descriptionStyles.Adl_col}`} style={{ width: "50%" }}>

                <h6 style={{ marginTop: "-4%", paddingBottom: "10px" }}>Lifting</h6>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div className={`${descriptionStyles.Inputlist}`}>

                    {/* <h4>Lifting</h4> */}

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>0-10lbs</label>
                      <LbsTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>11-25lbs</label>
                      <LbsTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>26-50lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>51-75lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>76-100lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>100+ lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>
                  </div>

                  <div className={`${descriptionStyles.Inputlist}`}>

                    {/* <h4>Lifting</h4> */}

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label style={{ fontSize: "15px" }}>How many pounds can you lift from ground to waist level before the injury</label>
                    <FrequencyTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>
                </div>

              </div>

              <div className={`${descriptionStyles.Adl_col}`} style={{ width: "50%" }}>

                <h6 style={{ marginTop: "-4%", paddingBottom: "10px" }}>Carrying</h6>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div className={`${descriptionStyles.Inputlist}`}>

                    {/* <h4>Lifting</h4> */}

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>0-10lbs</label>
                      <LbsTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>11-25lbs</label>
                      <LbsTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>26-50lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>51-75lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>76-100lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>100+ lbs</label>
                      <LbsTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>
                  </div>

                  <div className={`${descriptionStyles.Inputlist}`}>

                    {/* <h4>Lifting</h4> */}

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={form.job_type}
                  onChange={handleChange}
                /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Height</label>
                      <HeightTrigger />
                      {/* <input
                      type="text"
                      placeholder="Eg. your text here"
                      name="employee_name"
                      value={form.employee_name}
                      onChange={handleChange}
                    /> */}
                    </div>
                  </div>
                </div>

                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <label style={{ fontSize: "15px" }}>How many pounds can you lift from chest to overhead level before the injury</label>
                    <FrequencyTrigger />
                    {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={form.dominant_hand}
                  onChange={handleChange}
                /> */}
                  </div>
                </div>

              </div>

            </TabPanel>

            <TabPanel className={`${descriptionStyles.Modal_body}`}>
              <div className={`${descriptionStyles.Adl_col}`} style={{ width: "50%" }}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Driving</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Working around equipment and machinery?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Walking on uneven ground</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Exposure to excessive noise?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Exposure to extreme temperature, humidity or wetness</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Exposure to dust, gas, fumes, or chemicals?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

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

              <div className={`${descriptionStyles.Adl_col}`} style={{ width: "50%" }}>
                <div className={`${descriptionStyles.Inputlist}`}>
                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Working at heights?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Operation of foot controls or repetetive foot movement</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Use of protective equipment or assistive devices?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Use of special visual or auditory protective equipment?</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

                    {/* <input
                      type="text"
                      placeholder="If yes describe briefely..."
                      name="dominant_hand"
                      value={form.dominant_hand}
                      onChange={handleChange}
                    /> */}
                  </div>

                  <div className={`${descriptionStyles.Inputlist_con}`}>
                    <div className={`${descriptionStyles.Label_checkbox_con}`}>

                      <input className={`${descriptionStyles.Checkbox}`} type="checkbox" onChange={() => setChecked(!checked)} checked={checked} />
                      <label>Working with bio-hazards such as blood borne pathogens, sewage, hospital waste, etc</label>
                    </div>

                    {
                      checked ? (
                        <div>
                          <input
                            type="text"
                            placeholder="If yes describe briefely..."
                            name="dominant_hand"
                            value={form.dominant_hand}
                            onChange={handleChange}
                          />
                        </div>
                      ) : (<div></div>)
                    }

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
            </TabPanel>
          </Modal.Body>
          <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
            <button type="submit" disabled={loading}>
              {loading ? "Please Wait..." : "Save"}
            </button>
          </Modal.Footer>




        </Tabs>
      </form>
    </Modal>
  );
}
