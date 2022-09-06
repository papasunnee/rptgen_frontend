import React, { useContext, useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
  const [modalShow, setModalShow] = useState(false);
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

const initialValuesTab2 = {
  sitting: "",
  walking: "",
  standing: "",
  bending_neck: "",
  bending_waist: "",
  squatting: "",
  climbing: "",
  kneeling: "",
  crawling: "",
  turning_neck: "",
  twisting_waist: "",
  reaching_above_shoulder_level: "",
  reaching_below_shoulder_level: "",
  repetetive_use_of_hand: "",
  simple_grasping_right: "",
  simple_grasping_left: "",
  power_grasping_right: "",
  power_grasping_left: "",
  fine_manipulation_right: "",
  fine_manipulation_left: "",
  pushing_and_pulling_right: "",
  pushing_and_pulling_left: "",
  reaching_above_shoulder_right: "",
  reaching_above_shoulder_left: "",
  keyboarding_power_grasping_right: "",
  keyboarding_power_grasping_left: "",
};

const initialValuesTab3 = {
  lifting_pound_1: "",
  lifting_pound_2: "",
  lifting_pound_3: "",
  lifting_pound_4: "",
  lifting_pound_5: "",
  lifting_pound_6: "",
  lifting_height_1: "",
  lifting_height_2: "",
  lifting_height_3: "",
  lifting_height_4: "",
  lifting_height_5: "",
  lifting_height_6: "",
  carrying_pound_1: "",
  carrying_pound_2: "",
  carrying_pound_3: "",
  carrying_pound_4: "",
  carrying_pound_5: "",
  carrying_pound_6: "",
  carrying_height_1: "",
  carrying_height_2: "",
  carrying_height_3: "",
  carrying_height_4: "",
  carrying_height_5: "",
  carrying_height_6: "",
  ground_to_waist: "",
  chest_to_overhead: "",
};

function JobDescriptionModal(props) {
  const [checked, setChecked] = useState(false);
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/jobdescription?patient_id=${data._id}`,
    fetcher
  );
  const [error, setError] = useState(null);
  const [form, setForm] = useState(initialValues);
  const [form2, setForm2] = useState(initialValuesTab2);
  const [form3, setForm3] = useState(initialValuesTab3);
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

  const handleSubmitTab2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form2).every(
      (item) => item === null || item === ""
    );
    if (!isEmpty) {
      try {
        const response = await fetch(
          "/api/patient/jobdescription/preinjuryliftingcapacity",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, patient_id: data._id }),
          }
        );
        const functionData = await response.json();

        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("Patient Job Description Successfully Added");
          setForm2(initialValuesTab2);
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Job Description Activity Data");
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

  const handleSubmitTab3 = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form3).every(
      (item) => item === null || item === ""
    );
    if (!isEmpty) {
      try {
        const response = await fetch("/api/patient/jobdescription/activity", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, patient_id: data._id }),
        });
        const functionData = await response.json();

        if (functionData.success) {
          global.window.scrollTo({ top: 350, left: 0, behavior: "smooth" });
          setSuccessMessage("Patient Job Description Successfully Added");
          setForm2(initialValuesTab3);
          mutate();
          setTimeout(() => {
            setSuccessMessage(null);
            props.setModalShow(false);
          }, 1500);
        } else {
          throw new Error("Cannot Create Job Description Activity Data");
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

      <Tabs>
        <div className={`${descriptionStyles.Formtab_titles}`}>
          <TabList
            className={`${descriptionStyles.Formtab_titles}`}
            style={{ padding: 0 }}
          >
            <Tab className={`${descriptionStyles.Tab}`}>Main</Tab>

            <Tab className={`${descriptionStyles.Tab}`}>
              Activity (Hours per day)
            </Tab>

            <Tab className={`${descriptionStyles.Tab}`}>
              Pre-injury Lifting Capacity
            </Tab>

            <Tab className={`${descriptionStyles.Tab}`}>Other Details</Tab>
          </TabList>
        </div>

        <div style={{ minHeight: "22px" }}>
          {error && <p className="bg-danger text-white p-2">{error}</p>}
          {successMessage && (
            <p className="bg-success text-white p-2">{successMessage}</p>
          )}
        </div>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <TabPanel>
              <div className={`${descriptionStyles.Modal_body}`}>
                <div className={`${descriptionStyles.Adl_col}`}>
                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Dominant Hand</label>
                      <DominanthandTrigger form={form} setForm={setForm} />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Type of Job</label>
                      <TypeofjobTrigger form={form} setForm={setForm} />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Employee Name</label>
                      <input
                        type="text"
                        placeholder="Enter Employee Name"
                        name="employee_name"
                        value={form.employee_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Work Site Address</label>
                      <input
                        type="text"
                        placeholder="Enter Site Address"
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
              </div>
              <div className={`${descriptionStyles.Modal_footer} text-center`}>
                <button type="submit" disabled={loading}>
                  {loading ? "Please Wait..." : "Save"}
                </button>
              </div>
            </TabPanel>
          </form>

          <form onSubmit={handleSubmitTab2}>
            <TabPanel>
              <div className={`${descriptionStyles.Modal_body}`}>
                <div className={`${descriptionStyles.Adl_col}`}>
                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Sitting/Sentence</label>
                      <div>
                        <HoursperdayTrigger
                          form={form2}
                          setForm={setForm2}
                          field="sitting"
                        />
                      </div>
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Walking</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="walking"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Standing/De Pie</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="standing"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Bending(neck)/Agachar(cuello)</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="bending_neck"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Bending(waist)/Agachar(cintura)</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="bending_waist"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Squatting/En Cuclillias</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="squatting"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Climbing/Escalar</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="climbing"
                      />
                    </div>
                  </div>
                </div>

                <div className={`${descriptionStyles.Adl_col}`}>
                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Kneeling/Arrodillarse</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="kneeling"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Crawling/Gatear</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="crawling"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Turning(neck)/Reforcer el cuello</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="turning_neck"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Twisting(waist)/Reforcer la cintura</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="twisting_waist"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Reaching(above shoulder level)</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="reaching_above_shoulder_level"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Reaching(below shoulder level)</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="reaching_below_shoulder_level"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Repetetive use of hand</label>
                      <HoursperdayTrigger
                        form={form2}
                        setForm={setForm2}
                        field="repetetive_use_of_hand"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${descriptionStyles.Adl_col}`}
                  style={{ width: "350px" }}
                >
                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Simple Grasping</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="simple_grasping_right"
                        field_left="simple_grasping_left"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Power Grasping</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="power_grasping_right"
                        field_left="power_grasping_left"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Fine Manipulation (Manipulation Precisa):</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="fine_manipulation_right"
                        field_left="fine_manipulation_left"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Pushing and Pulling (Empujary y Jalar)</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="pushing_and_pulling_right"
                        field_left="pushing_and_pulling_left"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Reaching Above Shoulder</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="reaching_above_shoulder_right"
                        field_left="reaching_above_shoulder_left"
                      />
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Keyboarding: Mouse Use:</label>
                    </div>

                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label>Power Grasping</label>
                      <HoursperdayTrigger2
                        form={form2}
                        setForm={setForm2}
                        field_right="keyboarding_power_grasping_right"
                        field_left="keyboarding_power_grasping_left"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${descriptionStyles.Modal_footer} text-center`}>
                <button type="submit" disabled={loading}>
                  {loading ? "Please Wait..." : "Save"}
                </button>
              </div>
            </TabPanel>
          </form>
          <form onSubmit={handleSubmitTab3}>
            <TabPanel>
              <div className={`${descriptionStyles.Modal_body}`}>
                <div
                  className={`${descriptionStyles.Adl_col}`}
                  style={{ width: "50%" }}
                >
                  <h6 style={{ marginTop: "-4%", paddingBottom: "10px" }}>
                    Lifting
                  </h6>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={`${descriptionStyles.Inputlist}`}>
                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>0-10lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_1"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>11-25lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_2"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>26-50lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_3"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>51-75lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_4"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>76-100lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_5"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>100+ lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_pound_6"
                        />
                      </div>
                    </div>

                    <div className={`${descriptionStyles.Inputlist}`}>
                      {/* <h4>Lifting</h4> */}

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_1"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_2"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_3"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_4"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_5"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="lifting_height_6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label style={{ fontSize: "15px" }}>
                        How many pounds can you lift from ground to waist level
                        before the injury
                      </label>
                      <FrequencyTrigger
                        form={form3}
                        setForm={setForm3}
                        field="ground_to_waist"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`${descriptionStyles.Adl_col}`}
                  style={{ width: "50%" }}
                >
                  <h6 style={{ marginTop: "-4%", paddingBottom: "10px" }}>
                    Carrying
                  </h6>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className={`${descriptionStyles.Inputlist}`}>
                      {/* <h4>Lifting</h4> */}

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>0-10lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_1"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>11-25lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_2"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>26-50lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_3"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>51-75lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_4"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>76-100lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_5"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>100+ lbs</label>
                        <LbsTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_pound_6"
                        />
                      </div>
                    </div>

                    <div className={`${descriptionStyles.Inputlist}`}>
                      {/* <h4>Lifting</h4> */}

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_1"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_2"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_3"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_4"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_5"
                        />
                      </div>

                      <div className={`${descriptionStyles.Inputlist_con}`}>
                        <label>Height</label>
                        <HeightTrigger
                          form={form3}
                          setForm={setForm3}
                          field="carrying_height_6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${descriptionStyles.Inputlist}`}>
                    <div className={`${descriptionStyles.Inputlist_con}`}>
                      <label style={{ fontSize: "15px" }}>
                        How many pounds can you lift from chest to overhead
                        level before the injury
                      </label>
                      <FrequencyTrigger
                        form={form3}
                        setForm={setForm3}
                        field="chest_to_overhead"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${descriptionStyles.Modal_footer} text-center`}>
                <button type="submit" disabled={loading}>
                  {loading ? "Please Wait..." : "Save"}
                </button>
              </div>
            </TabPanel>
          </form>

          <TabPanel className={`${descriptionStyles.Modal_body}`}>
            <div
              className={`${descriptionStyles.Adl_col}`}
              style={{ width: "50%" }}
            >
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Driving</label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Working around equipment and machinery?</label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Walking on uneven ground</label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Exposure to excessive noise?</label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>
                      Exposure to extreme temperature, humidity or wetness
                    </label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Exposure to dust, gas, fumes, or chemicals?</label>
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

            <div
              className={`${descriptionStyles.Adl_col}`}
              style={{ width: "50%" }}
            >
              <div className={`${descriptionStyles.Inputlist}`}>
                <div className={`${descriptionStyles.Inputlist_con}`}>
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>Working at heights?</label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>
                      Operation of foot controls or repetetive foot movement
                    </label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>
                      Use of protective equipment or assistive devices?
                    </label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>
                      Use of special visual or auditory protective equipment?
                    </label>
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
                  <div className={`${descriptionStyles.Label_checkbox_con}`}>
                    <input
                      className={`${descriptionStyles.Checkbox}`}
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                    <label>
                      Working with bio-hazards such as blood borne pathogens,
                      sewage, hospital waste, etc
                    </label>
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
          </TabPanel>
        </Modal.Body>
        {/* <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "Please Wait..." : "Save"}
          </button>
        </Modal.Footer> */}
      </Tabs>
    </Modal>
  );
}
