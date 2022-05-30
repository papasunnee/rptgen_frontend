import React, { useState, Fragment } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
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

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import frame47Styles from "../Frame47/Frame47.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

import { fetcher } from "@/context/AuthContext";
import ScheduleAppointment from "../Modals/ScheduleAppointment";

function MyVerticallyCenteredModal(props) {
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
          Add Patient
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
              <input type="text" placeholder="Last Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Last Name</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Middle Name</label>
              <input type="text" placeholder="Middle Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Provider Code</label>
              <input type="text" placeholder="Enter Provider Code" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Asst Provider Code</label>
              <input type="text" placeholder="Enter Asst Provider Code" />
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
              <input type="text" placeholder="Last Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>
                City, State, and Zip (Place a comma “,” after the city)
              </label>
              <input type="text" placeholder="City, State, and Zip" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input type="text" placeholder="Enter Home Phone" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input type="text" placeholder="Enter Home Phone" />
            </div>

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
              <input type="text" placeholder="Select Birthdate" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Chart Number</label>
              <input type="text" placeholder="Enter Chart Number" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>SSN</label>
              <input type="text" placeholder="Enter SSN Number" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Select Gender</label>
              <input type="text" placeholder="Select Gender" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Marital Status</label>
              <input type="text" placeholder="Enter Marital Status" />
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

function Index() {
  // const { mutate } = useSWR("/api/patient", fetcher);
  const { data, mutate } = useSWR("/api/appointment", fetcher);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirmDelete = (id) => {
    confirmAlert({
      title: <span style={{ fontSize: "20px" }}>Confirm to Delete Record</span>,
      message: `Are you sure to do delete this record ?`,
      buttons: [
        {
          label: loading ? "Processing" : "Yes",
          onClick: async () => {
            try {
              const response = await handleDelete(id);
              console.log(response);
              mutate();
            } catch (error) {
              console.log(error.message);
            }
          },
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/appointment", {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delete_id: id }),
      });

      return await response.json();
    } catch (error) {
      return error;
    }
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
                      <h3>Appointments</h3>

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

                    <ScheduleAppointment />

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

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>
                        Upcoming Appointments (
                        {data?.data?.appointments?.length || 0})
                      </h3>
                    </div>

                    {data?.data?.appointments?.length > 0 && (
                      <div
                        className={`${frame44Styles.Appointmentlist_section}`}
                      >
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

                        {data?.data?.appointments?.map((appointment, index) => (
                          <div
                            key={index}
                            className={`${frame44Styles.Appointment}`}
                          >
                            <div className={`${frame44Styles.Name}`}>
                              <div className={`${frame44Styles.Profilepic}`}>
                                <Image src={profilepic} alt="profile-pic" />
                              </div>

                              <h4>{`${appointment.patient.firstname} ${appointment.patient.lastname}`}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4></h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>
                                {moment(appointment.appointment_date).format(
                                  "Do MMM YYYY"
                                )}
                              </h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>{`${appointment.appointment_hour}:${appointment.appointment_minute} ${appointment.appointment_mod}`}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>{appointment.doctor}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {appointment.condition.map((con, index) => (
                                  <p key={index}>{con}</p>
                                ))}
                              </div>
                            </div>

                            <div className={`${frame44Styles.Action_buttons}`}>
                              {/* <Image
                                variant="primary"
                                onClick={() => setModalShow(true)}
                                src={editicon}
                                alt="edit-icon"
                              /> */}

                              <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />

                              <Image
                                src={deleteicon}
                                alt="delete-icon"
                                onClick={() => {
                                  confirmDelete(appointment._id);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>
                        Previous Appointments (
                        {data?.data?.appointments?.length || 0})
                      </h3>
                    </div>

                    {data?.data?.appointments?.length > 0 && (
                      <div
                        className={`${frame44Styles.Appointmentlist_section}`}
                      >
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

                        {data?.data?.appointments?.map((appointment, index) => (
                          <div
                            key={index}
                            className={`${frame44Styles.Appointment}`}
                          >
                            <div className={`${frame44Styles.Name}`}>
                              <div className={`${frame44Styles.Profilepic}`}>
                                <Image src={profilepic} alt="profile-pic" />
                              </div>

                              <h4>{`${appointment.patient.firstname} ${appointment.patient.lastname}`}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4></h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>
                                {moment(appointment.appointment_date).format(
                                  "Do MMM YYYY"
                                )}
                              </h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>{`${appointment.appointment_hour}:${appointment.appointment_minute} ${appointment.appointment_mod}`}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <h4>{appointment.doctor}</h4>
                            </div>

                            <div className={`${frame44Styles.Name}`}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                {appointment.condition.map((con, index) => (
                                  <p key={index}>{con}</p>
                                ))}
                              </div>
                            </div>

                            <div className={`${frame44Styles.Action_buttons}`}>
                              {/* <Image
                                variant="primary"
                                onClick={() => setModalShow(true)}
                                src={editicon}
                                alt="edit-icon"
                              /> */}

                              <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                              />

                              <Image
                                src={deleteicon}
                                alt="delete-icon"
                                onClick={() => {
                                  confirmDelete(appointment._id);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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
