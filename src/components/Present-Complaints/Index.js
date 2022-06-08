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

import descriptionStyles from "../Jobdescription/jobdescription.module.scss";

import presentcomplainStyles from "./Complaints.module.scss";
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
                      <h3>Present Complaints</h3>

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

                  <div className={`${presentcomplainStyles.Formtab_titles}`}>
                    <div
                      className={`${presentcomplainStyles.Formtab_titles} col-md-5`}
                      style={{ padding: 0 }}
                    >
                      <div className={`${presentcomplainStyles.Tab}`}>
                        <h4>Spine</h4>
                      </div>

                      <div className={`${presentcomplainStyles.Tab}`}>
                        <h4>Elbow</h4>
                      </div>

                      <div className={`${presentcomplainStyles.Tab}`}>
                        <h4>Other History</h4>
                      </div>
                    </div>
                  </div>

                  <form className={`${presentcomplainStyles.Form}`}>
                    <div className={`${presentcomplainStyles.Toprow}`}>
                      <div
                        className={`${presentcomplainStyles.Paincard} col-md-5`}
                      >
                        <div className={`${presentcomplainStyles.Title}`}>
                          <h4>Pain</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Type</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Frequency</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Scale of Pain</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>
                      </div>

                      <div
                        className={`${presentcomplainStyles.Paincard} col-md-5`}
                      >
                        <div className={`${presentcomplainStyles.Title}`}>
                          <h4>Swelling</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${presentcomplainStyles.Checkbox}`}>
                          <input type="checkbox" id="pain" name="pain" />

                          <h4>Radicular Pain</h4>
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>
                            How often do you feel the radicular pain?
                          </label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Radiating to</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>How often do you feel the numbness?</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div
                          className={`${presentcomplainStyles.Checkboxcont}`}
                        >
                          <div className={`${presentcomplainStyles.Checkbox}`}>
                            <input type="checkbox" id="pain" name="pain" />

                            <h4>Numbness</h4>
                          </div>

                          <div className={`${presentcomplainStyles.Checkbox}`}>
                            <input type="checkbox" id="pain" name="pain" />

                            <h4>Tingling</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${presentcomplainStyles.Toprow}`}>
                      <div
                        className={`${presentcomplainStyles.Paincard} col-md-5`}
                      >
                        <div className={`${presentcomplainStyles.Title}`}>
                          <h4>Weekness</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${presentcomplainStyles.Checkbox}`}>
                          <input type="checkbox" id="pain" name="pain" />

                          <h4>Muscle Guarding</h4>
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>How often do you feel the weakness?</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>
                            How often do you experience muscle guarding?
                          </label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Scale of Pain</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>Comments</label>
                          <textarea placeholder="Eg. your text here" />
                        </div>
                      </div>

                      <div
                        className={`${presentcomplainStyles.Paincard} col-md-5`}
                      >
                        <div className={`${presentcomplainStyles.Title}`}>
                          <h4>Muscle Spasms</h4>

                          <input type="checkbox" id="pain" name="pain" />
                        </div>

                        <div className={`${presentcomplainStyles.Checkbox}`}>
                          <input type="checkbox" id="pain" name="pain" />

                          <h4>Stiffness</h4>
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>How often do you feel the stiffness?</label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div className={`${presentcomplainStyles.Inputgroup}`}>
                          <label>
                            How often do you feel the decreased in range of
                            motion?
                          </label>
                          <input type="text" placeholder="Eg. your text here" />
                        </div>

                        <div
                          className={`${presentcomplainStyles.Checkboxcont}`}
                        >
                          <div className={`${presentcomplainStyles.Checkbox}`}>
                            <input type="checkbox" id="pain" name="pain" />

                            <h4>Decreased ROM</h4>
                          </div>

                          <div className={`${presentcomplainStyles.Checkbox}`}>
                            <input type="checkbox" id="pain" name="pain" />

                            <h4>Clicking</h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${presentcomplainStyles.Button}`}>
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
