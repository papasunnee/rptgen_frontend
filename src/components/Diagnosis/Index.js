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

import diagnosisStyles from "./Diagnosis.module.scss";

import presentcomplainStyles from "../Present-Complaints/Complaints.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${presentcomplainStyles.Modal}`}
    >
      <Modal.Header
        className={`${presentcomplainStyles.Modal_header}`}
        closeButton
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${presentcomplainStyles.Modal_title}`}
        >
          Body Parts
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className={`${presentcomplainStyles.Modal_body}`}>
        <div className={`${presentcomplainStyles.Body_parts_col}`}>
          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={appointmenticon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Cervical Spine</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={newpatientsicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Thoracic Spine</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Right Shoulder</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Right Wrist</h4>
            </div>
          </div>
        </div>

        <div className={`${presentcomplainStyles.Body_parts_col}`}>
          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={appointmenticon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Left Shoulder</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={newpatientsicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Right Elbow</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Left Elbow</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Left Wrist</h4>
            </div>
          </div>
        </div>

        <div className={`${presentcomplainStyles.Body_parts_col}`}>
          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={appointmenticon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Right Hand</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={newpatientsicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Left Hand</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Lumbar Spine</h4>
            </div>
          </div>

          <div className={`${presentcomplainStyles.Body_parts_tab} col-md-2`}>
            <div className={`${presentcomplainStyles.Image}`}>
              <Image src={operationicon} alt="icon-img" />
            </div>

            <div className={`${presentcomplainStyles.Label}`}>
              <h4>Right Hip</h4>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className={`${presentcomplainStyles.Modal_footer}`}>
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
      <div className={`${frame44Styles.Frame34} container-fluid`}>
        <div className={`${frame44Styles.Heightadjust} row vh-100`}>
          <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

          <div className={`col d-flex flex-column h-sm-100`}>
            <main className={`row`}>
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Diagnosis</h3>

                      <SearchPatient />
                    </div>

                    <PatientInfo />
                  </div>

                  <div
                    className={`${frame44Styles.Toptabs} row col-md-7`}
                    style={{ padding: "30px 45px" }}
                  >
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
                        <h4>Show Body Parts</h4>
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

                  <div className={`${diagnosisStyles.Formtab_titles}`}>
                    <div
                      className={`${diagnosisStyles.Formtab_titles} col-md-5`}
                      style={{ padding: 0 }}
                    >
                      <div className={`${diagnosisStyles.Tab}`}>
                        <a href="#cervicalspine">Cervical Spine</a>
                      </div>

                      <div className={`${diagnosisStyles.Tab}`}>
                        <a href="#leftshoulder">Left Shoulder</a>
                      </div>

                      <div className={`${diagnosisStyles.Tab}`}>
                        <a href="#leftshoulder">Right Shoulder</a>
                      </div>
                    </div>
                  </div>

                  <form className={`${diagnosisStyles.Form}`}>
                    <div
                      id="cervicalspine"
                      className={`${diagnosisStyles.Toprow}`}
                    >
                      <div className={`${diagnosisStyles.Title}`}>
                        <h3>Cervical Spine</h3>
                      </div>

                      <div className={`${diagnosisStyles.Cardcon}`}>
                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Herniated Nucleus Pulposis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Musculoligamentous Injury with Discopathy</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Musculoligamentous Injury without Discopathy</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Myalgia</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Myositis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>
                      </div>

                      <div className={`${diagnosisStyles.Cardcon} col-md-10`}>
                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Neural Foraminal with Stenosis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Radiculitis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>
                            Spondylosis <br /> without Myelopathy/ <br />
                            Radiculopathy
                          </h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Sprain and Strain</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>
                      </div>
                    </div>

                    <div
                      id="leftshoulder"
                      className={`${diagnosisStyles.Toprow}`}
                    >
                      <div className={`${diagnosisStyles.Title}`}>
                        <h3>Left Shoulder</h3>
                      </div>

                      <div className={`${diagnosisStyles.Cardcon}`}>
                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Acromioclavicular Arthrosis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Acromioclavicular Dislocation</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Acromioclavicular Sprain</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>
                            Adhesive Capsulitis (Frozen Shoulder Syndrome)
                          </h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Bicipital Tendinitis</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>
                      </div>

                      <div className={`${diagnosisStyles.Cardcon} col-md-10`}>
                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Dislocation</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Fracture</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Fracture: Clavicle</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${diagnosisStyles.Card} col-md-2`}>
                          <h4>Fracture: Proximal Humerus</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>
                      </div>
                    </div>

                    <div className={`${diagnosisStyles.Button}`}>
                      <button>Save</button>
                    </div>
                  </form>
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
