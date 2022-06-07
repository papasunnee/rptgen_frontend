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

import descriptionStyles from "./jobdescription.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";

function MyVerticallyCenteredModal(props) {
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
      <Modal.Body className={`${descriptionStyles.Modal_body}`}>
        <div className={`${descriptionStyles.Adl_col}`}>
          <div className={`${descriptionStyles.Inputlist}`}>
            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Dominant Hand</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Type of Job</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Employee Name</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Work Site Address</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Job Title</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Wages</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>
          </div>
        </div>

        <div className={`${descriptionStyles.Adl_col}`}>
          <div className={`${descriptionStyles.Inputlist}`}>
            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Hrs. Worked Per Days</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Days Worked for week</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Start Working Date</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Last Working Date</label>
              <input type="text" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Reason</label>
              <textarea cols="20" rows="15" placeholder="Eg. your text here" />
            </div>
          </div>
        </div>

        <div className={`${descriptionStyles.Adl_col}`}>
          <div className={`${descriptionStyles.Inputlist}`}>
            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>Description</label>
              <textarea cols="20" rows="15" placeholder="Eg. your text here" />
            </div>

            <div className={`${descriptionStyles.Inputlist_con}`}>
              <label>New/Current Employment</label>
              <textarea cols="20" rows="15" placeholder="Eg. your text here" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
        {/* <Button onClick={props.onHide}>Close</Button> */}

        <button>Save</button>
      </Modal.Footer>
    </Modal>
  );
}

function Jobdescription() {
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
                      <h3>Job Description</h3>

                      <SearchPatient />
                    </div>
                    <PatientInfo />
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>

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

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Search</h4>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>Data</h3>
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      <div className={`${frame44Styles.Appointmentlist_title}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Name</h4>
                        </div>

                        <div
                          className={`${frame44Styles.Name}`}
                          style={{ marginLeft: "4%" }}
                        >
                          <h4>Date</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Doctor</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Action</h4>
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
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

export default Jobdescription;
