import React, { useState, Fragment } from "react";
import moment from "moment";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import useLocalStorage from "use-local-storage";

import { BsSearch } from "react-icons/bs";

import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";
import moreimg from "@/images/more-icon.png";
import profilepic from "@/images/profile-1.png";
import appointmenticon from "@/images/appointment-icon.png";
import newpatientsicon from "@/images/newpatients-icon.png";
import operationicon from "@/images/operation-icon.png";
import hospitalearningicon from "@/images/hospitalearning-icon.png";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

import MoonIcon from "@/images/moon.png";
import SunIcon from "@/images/sun.png";

import frame44Styles from "../Frame44/Frame44.module.scss";

import frame47Styles from "../Frame47/Frame47.module.scss";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import { fetcher, useAuth } from "@/context/AuthContext";
import useSWR from "swr";

function MyVerticallyCenteredModal(props) {
  const { modalData = {} } = props;
  const [mData, setMData] = useState(modalData);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setMData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
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
          Edit Patient
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${functionalStyles.Modal_body}`}>
        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
              Basic Information
            </h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={mData.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Last Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={mData.firstname}
                name="firstname"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Middle Name</label>
              <input
                type="text"
                placeholder="Middle Name"
                value={mData.middlename}
                name="middlename"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Provider Code</label>
              <input
                type="text"
                placeholder="Enter Provider Code"
                value={mData.providers_code}
                name="providers_code"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Asst Provider Code</label>
              <input
                type="text"
                placeholder="Enter Asst Provider Code"
                value={mData.assitant_providers_code}
                name="assitant_providers_code"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>&nbsp;</h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Street Address</label>
              <input
                type="text"
                placeholder="Street Address"
                value={mData.street_address}
                name="street_address"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>
                City, State, and Zip (Place a comma “,” after the city)
              </label>
              <input
                type="text"
                placeholder="City, State, and Zip"
                value={mData.city_state_zip}
                name="city_state_zip"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input
                type="text"
                placeholder="Enter Home Phone"
                value={mData.home_phone}
                name="home_phone"
                onChange={handleChange}
              />
            </div>

            {/* <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input type="text" placeholder="Enter Home Phone" />
            </div> */}

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Upload Patient Picture</label>
              <input type="file" placeholder="Browse File" />
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>Status</h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Date of Birth</label>
              <input
                type="text"
                placeholder="Select Birthdate"
                value={mData.birt_date}
                name="birt_date"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Chart Number</label>
              <input
                type="text"
                placeholder="Enter Chart Number"
                value={mData.chart_number}
                name="chart_number"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>SSN</label>
              <input
                type="text"
                placeholder="Enter SSN Number"
                value={mData.ssn}
                name="ssn"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Select Gender</label>
              <input
                type="text"
                placeholder="Select Gender"
                value={mData.gender}
                name="gender"
                onChange={handleChange}
              />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Marital Status</label>
              <input
                type="text"
                placeholder="Enter Marital Status"
                value={mData.marital_status}
                name="marital_status"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
        {/* <Button onClick={props.onHide}>Close</Button> */}

        <button>Save</button>
      </Modal.Footer>
    </Modal>
  );
}

const initialValues = {
  _id: null,
  firstname: "",
  lastname: "",
  middlename: "",
  street_address: "",
  city_state_zip: "",
  home_phone: "",
  providers_code: "",
  assistant_providers_code: "",
  image_url: "",
  birth_date: "",
  chart_number: "",
  ssn: "",
  gender: "",
  marital_status: "",
};
function Index() {
  const { data, error, isValidating, mutate } = useSWR("/api/patient", fetcher);
  console.log({ data, error });

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);

  const handleModal = (modalStatus, modalData) => {
    setModalData(modalData);
    setModalShow(true);
  };
  return (
    <Fragment>
      <div
        className={`${frame44Styles.Frame34} container-fluid overflow-hidden`}
      >
        <div
          className={`${frame44Styles.Heightadjust} row vh-100 overflow-auto`}
        >
          <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

          <div className={`col d-flex flex-column h-sm-100`}>
            <main className={`row overflow-auto`}>
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div
                      className={`${frame47Styles.Top}`}
                      style={{ marginBottom: "5%" }}
                    >
                      <h3>Patient Database</h3>

                      <div
                        className={`${frame47Styles.Inputgroup} input-group flex-nowrap`}
                      >
                        <span
                          className={`${frame47Styles.Inputgroup_text} input-group-text`}
                          id="addon-wrapping"
                        >
                          <BsSearch />
                        </span>
                        <input
                          type="text"
                          className={`form-control`}
                          placeholder="Search Category, Patient Info etc"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Toptabs} row`}>
                    <div
                      className={`${frame47Styles.Toptabs_title}`}
                      style={{ paddingBottom: "15px" }}
                    >
                      <h3>Quick Tasks</h3>
                    </div>

                    <span
                      className={`${frame44Styles.Tab} col-md-5`}
                      style={{ width: "300px" }}
                    >
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Schedule Appointment</h4>
                      </div>
                    </span>

                    <span className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Add Complaint</h4>
                      </div>
                    </span>

                    <span className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Operations</h4>
                      </div>
                    </span>
                  </div>

                  <span className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>
                        Patients (
                        {data?.data?.patients?.length || (
                          <small>You Have No Patient Record in Database</small>
                        )}
                        )
                      </h3>
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      {data?.data?.patients?.length > 0 ? (
                        <>
                          <div
                            className={`${frame44Styles.Appointmentlist_title}`}
                          >
                            <div className={`${frame44Styles.Name}`}>
                              <h4>Name</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>Email</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>Date</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>Visit Time</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>Doctor</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>Conditions</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>&nbsp;</h4>
                            </div>
                          </div>
                          {data?.data?.patients?.map((patient, i) => (
                            <div
                              key={i}
                              className={`${frame44Styles.Appointment}`}
                            >
                              <div className={`${frame44Styles.Name}`}>
                                <div className={`${frame44Styles.Profilepic}`}>
                                  <Image src={profilepic} alt="profile-pic" />
                                </div>

                                <h4>
                                  {patient.firstname + " " + patient.lastname}
                                </h4>
                              </div>

                              <div className={`${frame44Styles.Name}`}>
                                <h4>{patient.email}</h4>
                              </div>

                              <div className={`${frame44Styles.Name}`}>
                                <h4>
                                  {moment(patient.created_at).format(
                                    "MMM Do YYYY"
                                  )}
                                </h4>
                              </div>

                              <div className={`${frame44Styles.Name}`}>
                                <h4>
                                  {patient.appointments.length > 0
                                    ? "Not Assigned"
                                    : "Null"}
                                </h4>
                              </div>

                              <div className={`${frame44Styles.Name}`}>
                                <h4>
                                  {patient.appointments.length > 0
                                    ? "Not Assigned"
                                    : "Null"}
                                </h4>
                              </div>

                              <div className={`${frame44Styles.Name}`}>
                                <h4>
                                  {patient.appointments.length > 0
                                    ? "Not Assigned"
                                    : "Null"}
                                </h4>
                              </div>

                              <div
                                className={`${frame44Styles.Action_buttons}`}
                              >
                                {/* <Button
                                                        variant="primary"
                                                        onClick={() => setModalShow(true)}
                                                        className={`${frame44Styles.Editbutton} col-md-3`}
                                                    > */}
                                <Image
                                  variant="primary"
                                  onClick={() => handleModal(true, patient)}
                                  src={editicon}
                                  alt="edit-icon"
                                />
                                {/* </Button> */}

                                <Image src={deleteicon} alt="delete-icon" />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        modalData={modalData}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </span>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
