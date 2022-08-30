import React, { Fragment, useState } from "react";
import Image from "next/image";

import Switch from "react-switch";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

function MyVerticallyCenteredModal(props) {
  const { selectedBodyPart, setSelectedBodyPart } = props;

  const handleClick = (item) => {
    const activeItem = selectedBodyPart.find(
      (bodyPart) => bodyPart.name == item.name
    );

    const updateItem = { ...activeItem, isActive: !activeItem.isActive };
    const arrayCopy = [...selectedBodyPart];
    arrayCopy.splice(activeItem.id, 1, updateItem);
    setSelectedBodyPart([...arrayCopy]);
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
          Select Body Part
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`row ${functionalStyles.Selectitems_con}`}>
            {/* {selectedBodyPart.map((item, index) => (
              <div className="col-md-6">
                <div
                  onClick={() => handleClick(item)}
                  key={index}
                  id={item.name}
                  className={`${functionalStyles.Selectitems} ${item.isActive ? functionalStyles.activeSelection : ""
                    }`}
                >
                  {item.name}
                </div>
              </div>
            ))} */}
            Hello
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}

function Index() {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState([...BodyParts]);

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
                  </div>

                  <div
                    className={`${frame44Styles.Toptabs} row col-md-7`}
                    style={{ padding: "30px 45px", marginTop: "2%" }}
                  >
                    <div
                      className={`${frame47Styles.Toptabs_title}`}
                      style={{ marginBottom: "2%" }}
                    >
                      <h3>Quick Tasks</h3>
                    </div>

                    <Button
                      // variant="primary"
                      // onClick={() => setModalShow(true)}
                      show={modalShow}
                      selectedBodyPart={selectedBodyPart}
                      setSelectedBodyPart={setSelectedBodyPart}
                      onHide={() => setModalShow(false)}
                      setModalShow={setModalShow}
                      className={`${frame44Styles.Tab} col-md-3`}
                      style={{ background: "#fff", color: "#000" }}
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

                  <Tabs>
                    <div
                      className={`${diagnosisStyles.Formtab_titles}`}
                      style={{ paddingLeft: "10px", paddingRight: 0 }}
                    >
                      <TabList
                        className={`${diagnosisStyles.Formtab_titles}`}
                        style={{ padding: 0 }}
                      >
                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Cervical Spine
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Lumbar Spine
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Thoracic Spine
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Hip
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Shoulder
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>Left Hip</Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Shoulder
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Knee
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Elbow
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Knee
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Elbow
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Foot
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Wrist
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Foot
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Wrist
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>Mics</Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Right Hand
                        </Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>Mics</Tab>

                        <Tab className={`${diagnosisStyles.Tab}`}>
                          Left Hand
                        </Tab>
                      </TabList>
                    </div>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Herniated Nucleus Pulposis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Musculoligamentous Injury with Discopathy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Musculoligamentous Injury without Discopathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Neural Foraminal with Stenosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radiculitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Spondylosis <br /> without Myelopathy/ <br />
                                Radiculopathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain and Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Discogenic Low Back Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Facet Arthrosis/Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Failed Back Syndrome (Post-Laminectomy Syndrome)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Herniated Nucleus Pulposis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Musculoligamentous Injury with Discopathy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Musculoligamentous Injury without Discopathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Neural Foraminal with Stenosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radiculitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sciatica</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Spondylolisthesis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Spondylosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain and Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Musculoligamentous Injury with Discopathy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Musculoligamentous Injury without Discopathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radiculitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Spondylosis <br /> without Myelopathy/ <br />
                                Radiculopathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain and Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Contusion</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Giuteus Medius Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Giuteus Medius Tendinosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Greater Trochanteric Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Groin Strain/Adductor Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Meralgia Paresthetica</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sacroilitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain: Hamstring/Hip Flexor</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Arthrosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Dislocation</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Adhesive Capsulitis (Frozen Shoulder Syndrome)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Bicipital Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Clavicie</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Proximal Humerus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Impingement Syndrome (Anterior)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Impingement Syndrome (Posterior)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Instability</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myofascial Pain Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rotator Cuff Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rotator Cuff Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Subacromial Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Superior Labral Anterior Posterior Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Contusion</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Giuteus Medius Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Giuteus Medius Tendinosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Greater Trochanteric Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Groin Strain/Adductor Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Meralgia Paresthetica</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sacroilitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain: Hamstring/Hip Flexor</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Arthrosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Dislocation</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Acromioclavicular Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Adhesive Capsulitis (Frozen Shoulder Syndrome)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Bicipital Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Clavicie</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Proximal Humerus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Impingement Syndrome (Anterior)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Impingement Syndrome (Posterior)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Instability</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myofascial Pain Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rotator Cuff Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rotator Cuff Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Subacromial Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Superior Labral Anterior Posterior Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>ACL Insufficiency</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>ACL Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Anterior Knee Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Chonromalacia Patella</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Internal Derangement</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Lateral Meniscus Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Medial Meniscus Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Medial/Lateral Meniscopathy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Patellar Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Patellar Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Quadriceps Atrophy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Biceps Tendinosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Biceps Tendon Tear/Rupture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Contusion</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Cubital Tunnel Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation: Radius</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation: Ulnohumeral Joint</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forearm Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Humerus (Lower End)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Radius</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Ulna</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Lateral Epicondylagia (Lateral Epicondylitis or
                                Tennis Elbow)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Medial Epicondylagia (Medial Epicondylitis or
                                Golfer&rsquo;s Elbow)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Olecranon Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Pronator Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Ulnar Neuritis: Rule Out Cubital Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>ACL Insufficiency</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>ACL Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Anterior Knee Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Chonromalacia Patella</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Internal Derangement</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Lateral Meniscus Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Medial Meniscus Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Medial/Lateral Meniscopathy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Patellar Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Patellar Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Quadriceps Atrophy</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Biceps Tendinosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Biceps Tendon Tear/Rupture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Contusion</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Cubital Tunnel Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation: Radius</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dislocation: Ulnohumeral Joint</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forearm Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Humerus (Lower End)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Radius</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Ulna</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Lateral Epicondylagia (Lateral Epicondylitis or
                                Tennis Elbow)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Medial Epicondylagia (Medial Epicondylitis or
                                Golfer&rsquo;s Elbow)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Olecranon Bursitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Pronator Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Ulnar Neuritis: Rule Out Cubital Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Achilles Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Achilles Tendon Rupture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Bunions/Hallux Valgus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Calcaneal Heel Spur</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Charcot Joint (Neurogenic Arthropathy)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Derangement</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Foot Drop</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Foot Neuroma</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Metatarsal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Phalanges</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Tarsal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hindfoot Fracture: Calcaneus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hindfoot Fracture: Talus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Metatarsophalangeal Synovitis/Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Plantar Heel Pain (Plantar Fasciltis)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tarsal Tunnel Syndrome (TTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Carpal Tunnel Syndrome (CTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Compartment Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Crush Injury</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexor Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Closed</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ganglion Cyst</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Kienbocks Disease</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Median Neuritis: Rule out Carpal Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Non-specific Wrist Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Overuse Syndrome/Cumulative Trauma Disorder
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rule out TFCC Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Triangular Fibrocartilage Complex (TFCC) Tears
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ulnar Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>de Quarvain&rsquo;s Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Achilles Tendinitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Achilles Tendon Rupture</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Bunions/Hallux Valgus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Calcaneal Heel Spur</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Charcot Joint (Neurogenic Arthropathy)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Derangement</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Foot Drop</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Foot Neuroma</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Metatarsal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Phalanges</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Forefoot Fracture: Tarsal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hindfoot Fracture: Calcaneus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hindfoot Fracture: Talus</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Metatarsophalangeal Synovitis/Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Plantar Heel Pain (Plantar Fasciltis)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tarsal Tunnel Syndrome (TTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Carpal Tunnel Syndrome (CTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Compartment Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Crush Injury</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexor Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Closed</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ganglion Cyst</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Kienbocks Disease</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Median Neuritis: Rule out Carpal Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Non-specific Wrist Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Overuse Syndrome/Cumulative Trauma Disorder
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Rule out TFCC Tear</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Triangular Fibrocartilage Complex (TFCC) Tears
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ulnar Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>de Quarvain&rsquo;s Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Abdominal Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Anxiety</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Autoimmune disorder/inflammatory Arthropathy
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Cervicogenic Headaches</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Complex Regional Pain Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Depression</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Dizziness</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fibromyalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Gastrointestinal Complaints</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Headaches/Cephalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hernia: Abdominal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hernia: Inguinal</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hernia: Umbilical</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Hypertension</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Insomnia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Multiple factors contributing to orthopedic
                                condition
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Occipital Neuralgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Peptic Ulcer</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Psychological Complaints: Deffered to Specialist
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Reflex Sympathetic Dystrophy (RSD)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Shortness of breath</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Sleep Disorder</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Stress</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Weight Gain/Obesity</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>CMC/Basal Joint Arthrosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Carpal Tunnel Syndrome (CTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Compartment Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Crush Injury</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexion Constracture (Finger)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexor Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Closed</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Distal Phalanx</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Fracture: Proximal - Distal Phalanx (Thumb)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ganglion Cyst</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Mallet Finger</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Median Neuritis: Rule Out Carpal Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Nalibed Unspecified Finger Deformity</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Non-specific Hand Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Overuse Syndrome/Cumulative Trauma Disorder
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Right Hand Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Right Hand Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Subungual Hematoma</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Trigger Thumb</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ulnar Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${diagnosisStyles.Form}`}>
                        <div className={`${diagnosisStyles.Toprow}`}>
                          <div className={`${diagnosisStyles.Cardcon}`}>
                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>CMC/Basal Joint Arthrosis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Carpal Tunnel Syndrome (CTS)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Compartment Syndrome</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Crush Injury</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexion Constracture (Finger)</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Flexor Tenosynovitis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Closed</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Fracture: Distal Phalanx</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Fracture: Proximal - Distal Phalanx (Thumb)
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ganglion Cyst</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Mallet Finger</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Median Neuritis: Rule Out Carpal Tunnel Syndrome
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myalgia</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Myositis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Nalibed Unspecified Finger Deformity</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Non-specific Hand Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Osteoarthritis</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>
                                Overuse Syndrome/Cumulative Trauma Disorder
                              </h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Radial Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Right Hand Sprain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Right Hand Strain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Subungual Hematoma</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Trigger Thumb</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${diagnosisStyles.Card} col-md-3`}>
                              <h4>Ulnar Nerve Entrapment</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>
                        </div>

                        <div className={`${diagnosisStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>
                  </Tabs>

                  <h5 className="text-center" style={{ marginTop: "18%" }}>
                    Click on “Show body parts” to add
                  </h5>

                  {/* <form className={`${diagnosisStyles.Form}`}>
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
                  </form> */}
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

const BodyParts = [
  { id: 0, name: "Cervical Spine", isActive: false },
  { id: 1, name: "Thoracic Spine", isActive: false },
  { id: 2, name: "Right Shoulder", isActive: false },
  { id: 3, name: "Left Shoulder", isActive: false },
  { id: 4, name: "Right Elbow", isActive: false },
  { id: 5, name: "Left Elbow", isActive: false },
  { id: 6, name: "Right Wrist", isActive: false },
  { id: 7, name: "Left Wrist", isActive: false },
  { id: 8, name: "Right Hand", isActive: false },
  { id: 9, name: "Left Hand", isActive: false },
  { id: 10, name: "Other", isActive: false },
  { id: 11, name: "Lumbar Spine", isActive: false },
  { id: 12, name: "Right Hip", isActive: false },
  { id: 13, name: "Left Hip", isActive: false },
  { id: 14, name: "Right Knee", isActive: false },
  { id: 14, name: "Left Knee", isActive: false },
  { id: 16, name: "Right Foot/Ankle", isActive: false },
  { id: 17, name: "Left Foot/Ankle", isActive: false },
  { id: 18, name: "Internal", isActive: false },
  { id: 19, name: "Neuro", isActive: false },
  { id: 20, name: "Psyche Questionaire", isActive: false },
  { id: 21, name: "General Comment", isActive: false },
];
