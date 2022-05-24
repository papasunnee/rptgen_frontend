import React, { useState, Fragment } from "react";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

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

import frame44Styles from "../Frame44/Frame44.module.scss";

import frame47Styles from "../Frame47/Frame47.module.scss";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

function MyVerticallyCenteredModal(props) {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${frame44Styles.Modal}`}
    >
      <Modal.Header className={`${frame44Styles.Modal_header}`} closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${frame44Styles.Modal_title}`}
        >
          Create Appointments
        </Modal.Title>
      </Modal.Header>
      <Calendar
        value={dateState}
        onChange={changeDate}
        className={`${frame44Styles.Calender}`}
      />
      <Modal.Footer className={`${frame44Styles.Modal_footer}`}>
        <button>Create Appointment</button>
      </Modal.Footer>
    </Modal>
  );
}

function Frame46() {
  const [modalShow, setModalShow] = React.useState(false);

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
              <div
                className={`${frame44Styles.Contentcon} col pt-4`}
                style={{ padding: 0 }}
              >
                <Topnav />

                <div
                  className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Patients Details</h3>

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

                    <div className={`${frame47Styles.Details}`}>
                      <div className={`${frame47Styles.Namecont}`}>
                        <div className={`${frame47Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profile-pic" />
                        </div>

                        <div className={`${frame47Styles.Name}`}>
                          <h4 className={`${frame47Styles.Bigname}`}>
                            Gerson Basconcillo
                          </h4>
                          <h5>See Patient info</h5>
                        </div>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Address: 46 Amity Ext, Paranaque City</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Contact +7 (4812) 11-22-33</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Birthdate: 06/45/1990</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Age: 32</h4>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Toptabs} row`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Schedule Appointment</h4>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Add Complaint</h4>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Operations</h4>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Analytics</h4>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>Upcoming Appointments</h3>

                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        Create Appointment
                      </Button>

                      {/* <Button variant="primary" onClick={() => setModalShow(true)} className={`${frame44Styles.Tab} col-md-3`}>
                                            <div className={`${frame44Styles.Image}`}>
                                                <Image src={appointmenticon} alt="icon-img" />
                                            </div>

                                            <div className={`${frame44Styles.Content}`}>
                                                <h4>Add Superbill</h4>
                                            </div>
                                        </Button> */}

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      <div className={`${frame44Styles.Appointmentlist_title}`}>
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

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>Appointment Activity</h3>
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      <div className={`${frame44Styles.Appointmentlist_title}`}>
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

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image src={profilepic} alt="profile-pic" />
                          </div>

                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>lesie.alexander@example.com</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>09:15-09:45am</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Mumps Stage II</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Frame46;
