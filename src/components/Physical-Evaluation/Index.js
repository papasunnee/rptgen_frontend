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

import diagnosisStyles from "../Diagnosis/Diagnosis.module.scss";

import evaluationStyles from "./Evaluation.module.scss";

import presentcomplainStyles from "../Present-Complaints/Complaints.module.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${presentcomplainStyles.Modal}`}
    >
      <Modal.Header className={`${presentcomplainStyles.Modal_header}`} closeButton>
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
            <main className={`row vh-100`}>
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div
                  className={`${frame44Styles.Body}`}>
                  <div
                    className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Physical Evaluation</h3>

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
                  </div>

                  <div className={`${diagnosisStyles.Formtab_titles}`}>
                    <div
                      className={`${diagnosisStyles.Formtab_titles} col-md-8`}
                      style={{ padding: 0 }}
                    >
                      <div className={`${diagnosisStyles.Tab}`}>
                        <a style={{ color: "#336CFB" }} href="#abdomen">Abdomen</a>
                      </div>

                      <div className={`${diagnosisStyles.Tab}`}>
                        <a>Lumbar Spine</a>
                      </div>

                      <div className={`${diagnosisStyles.Tab}`}>
                        <a>Hip and Pelvis</a>
                      </div>
                    </div>
                  </div>

                  <form className={`${diagnosisStyles.Form}`}>
                    <div id="abdomen" className={`${diagnosisStyles.Toprow}`}>
                      <div className={`${diagnosisStyles.Title}`}>
                        <h3>Abdomen</h3>
                      </div>

                      <div className={`${evaluationStyles.Evaluationcon}`}>
                        <div className={`${evaluationStyles.Cardcon} col-md-5`}>
                          <div className={`${evaluationStyles.Card} col-md-2`}>
                            <h4>Soft and non-tender</h4>

                            <input type="checkbox" id="pain" name="pain" />
                          </div>

                          <div className={`${evaluationStyles.Card} col-md-2`}>
                            <h4>Umbilical Hernia</h4>

                            <input type="checkbox" id="pain" name="pain" />
                          </div>

                          <div className={`${evaluationStyles.Card} col-md-2`}>
                            <h4>Abdominal Hernia</h4>

                            <input type="checkbox" id="pain" name="pain" />
                          </div>
                        </div>

                        <div className={`${evaluationStyles.Textbox}`}>
                          <label>Comments</label>
                          <br />
                          <textarea
                            placeholder="Eg. your text here"
                            cols="70"
                            rows="15"
                          />
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
