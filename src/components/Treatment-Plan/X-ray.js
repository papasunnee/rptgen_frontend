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

import planStyles from "./Plan.module.scss";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${planStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${planStyles.Modal_title}`}
        >
          Select MTUS content to be included
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${planStyles.Modal_body}`}>
        <div className={`${planStyles.Appointment_activity}`}>
          <div className={`${planStyles.Title}`}>
            <h3>Data</h3>
          </div>

          <div className={`${planStyles.Appointmentlist_section}`}>
            <div className={`${planStyles.Appointmentlist_title}`}>
              <div className={`${planStyles.Name}`}>
                <h4>Name</h4>
              </div>

              <div
                className={`${planStyles.Name}`}
                style={{ marginLeft: "4%" }}
              >
                <h4>Date</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Doctor</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Action</h4>
              </div>
            </div>

            <div className={`${planStyles.Appointment}`}>
              <div className={`${planStyles.Name}`}>
                <h4>Lesile Alexander</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>10/10/2020</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Dr. Jacob Jones</h4>
              </div>

              <div className={`${planStyles.Action_buttons}`}>
                <Image src={editicon} alt="edit-icon" />
                <Image src={deleteicon} alt="delete-icon" />
              </div>
            </div>

            <div className={`${planStyles.Appointment}`}>
              <div className={`${planStyles.Name}`}>
                <h4>Lesile Alexander</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>10/10/2020</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Dr. Jacob Jones</h4>
              </div>

              <div className={`${planStyles.Action_buttons}`}>
                <Image src={editicon} alt="edit-icon" />
                <Image src={deleteicon} alt="delete-icon" />
              </div>
            </div>

            <div className={`${planStyles.Appointment}`}>
              <div className={`${planStyles.Name}`}>
                <h4>Lesile Alexander</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>10/10/2020</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Dr. Jacob Jones</h4>
              </div>

              <div className={`${planStyles.Action_buttons}`}>
                <Image src={editicon} alt="edit-icon" />
                <Image src={deleteicon} alt="delete-icon" />
              </div>
            </div>

            <div className={`${planStyles.Appointment}`}>
              <div className={`${planStyles.Name}`}>
                <h4>Lesile Alexander</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>10/10/2020</h4>
              </div>

              <div className={`${planStyles.Name}`}>
                <h4>Dr. Jacob Jones</h4>
              </div>

              <div className={`${planStyles.Action_buttons}`}>
                <Image src={editicon} alt="edit-icon" />
                <Image src={deleteicon} alt="delete-icon" />
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={`${planStyles.Modal_footer}`}>
        {/* <Button onClick={props.onHide}>Close</Button> */}

        <button>Save</button>
      </Modal.Footer>
    </Modal>
  );
}

function Xray() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Fragment>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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

                <div
                  className={`${frame44Styles.Body}`}>
                  <div
                    className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Treatment Plan</h3>

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

                  <form className={`${planStyles.Form}`}>
                    <div className={`${planStyles.Toprow}`}>
                      <div className={`${planStyles.Title}`}>
                        <h3>Main Menu &gt; X-Ray</h3>
                      </div>

                      <div className={`${planStyles.Cardcon}`}>
                        <a href="x-ray" className={`${planStyles.Card}`}>
                          <h4>CERVICAL SPINEy</h4>

                          {/* <p>2 Items</p> */}

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT SHOULDER</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT HAND</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>THORACIC SPINE</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT SHOULDER</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT HIP</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LUMBAR SPINE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT ELBOW</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT KNEE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT ELBOW</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT KNEE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT WRIST</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT FOOT/ ANKLE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT WRIST</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>LEFT FOOT/ ANKLE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>RIGHT HAND</h4>

                          <p>2 Items</p>
                        </a>
                      </div>
                    </div>

                    <div className={`${planStyles.Button}`}>
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

export default Xray;
