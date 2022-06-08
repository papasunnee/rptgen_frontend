import React, { Fragment } from "react";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";

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
          Add Workstatus
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${functionalStyles.Modal_body}`}>
        <div className={`${functionalStyles.Functionalimprovment_col}`}>
          <h5>General</h5>

          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Return to full duty on</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Temporarily totally disabled</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Temporarily partially disabled</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>
                This patient has reached maximum medical improvement
              </label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Date of next appointment</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Estimated return to fully duty</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Select date Date of discharge from care</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" />
              <label>Other comments</label>
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <h5>No work involving</h5>

          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Hand</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Arm</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Leg</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Sitting Job</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Standing Job</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Squat for</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Repetetive tasks</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Twist</label>
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <h5>&nbsp;</h5>

          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Wear splint/brace/cast</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>No use of vibratory tools or guns</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>No driving</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>No overhead work at or above 90</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Not to operate moving machinery</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Not to get on/off moving equipment</label>
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <input type="checkbox" style={{ width: "30px" }} />
              <label>Comments</label>
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
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Workstatus</h3>

                      <SearchPatient />
                    </div>

                    <PatientInfo />
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>

                    {/* <div className={`${frame44Styles.Tab} col-md-3`}> */}
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                      className={`${frame44Styles.Tab} col-md-3`}
                    >
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Add Workstatus</h4>
                      </div>
                    </Button>

                    {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                                            Launch vertically centered modal
                                        </Button> */}

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>Record Reviews</h3>
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      <div className={`${frame44Styles.Appointmentlist_title}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Uploaded File</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Date Uploaded</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Actions</h4>
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <div className={`${frame44Styles.Profilepic}`}>
                            <Image
                              src={appointmenticon}
                              alt="icon-img"
                              style={{ borderRadius: 0 }}
                            />
                          </div>
                          <h4>MIL-171948999</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>
                    </div>
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
