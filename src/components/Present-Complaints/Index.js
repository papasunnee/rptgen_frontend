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

import descriptionStyles from "../Jobdescription/jobdescription.module.scss";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

import presentcomplainStyles from "./Complaints.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";

function MyVerticallyCenteredModal(props) {
  const { selectedBodyPart, setSelectedBodyPart, setForm } = props;

  const handleClick = (item) => {
    const activeItem = selectedBodyPart.find(
      (bodyPart) => bodyPart.name == item.name
    );

    const updateItem = { ...activeItem, isActive: !activeItem.isActive };
    const arrayCopy = [...selectedBodyPart];
    arrayCopy.splice(activeItem.id, 1, updateItem);
    setSelectedBodyPart([...arrayCopy]);
    const formData = [];
    arrayCopy.forEach((item) => {
      if (item.isActive) {
        return formData.push(item.name);
      }
    });
    setForm((prev) => ({
      ...prev,
      body_parts: [...formData],
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
          Select Body Part
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`row ${functionalStyles.Selectitems_con}`}>
            {selectedBodyPart.map((item, index) => (
              <div className="col-md-6" key={index}>
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
            ))}
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}

function Index({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState([...BodyParts]);

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

                <div className={`${frame44Styles.Body}`} style={{ padding: "12px" }}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Present Complaints</h3>

                      <SearchPatient />
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
                      style={{ backgroundColor: "#fff", color: "#000" }}
                    >
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Show Body Parts</h4>
                      </div>
                    </Button>

                    {/* <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      setForm={setForm}
                      selectedBodyPart={selectedBodyPart}
                      setSelectedBodyPart={setSelectedBodyPart}
                      onHide={() => setModalShow(false)}
                      setModalShow={setModalShow}
                    />
                  </div>

                  <Tabs>

                    <div className={`${presentcomplainStyles.Formtab_titles}`}>
                      <TabList
                        className={`${presentcomplainStyles.Formtab_titles} col-md-12`}
                        style={{ padding: 0 }}
                      >
                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Cervical Spine</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Lumber Spine</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Hip</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Shoulder</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Hip</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Shoulder</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Knee</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Elbow</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Knee</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Elbow</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Foot</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Wrist</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Foot</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Wrist</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Internal</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Right Hand</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Neuro</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Left Hand</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>General Comment</h4>
                        </Tab>

                        <Tab className={`${presentcomplainStyles.Tab}`}>
                          <h4>Others</h4>
                        </Tab>

                      </TabList>
                    </div>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Weekness</h4>


                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Bilateral:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Weekness</h4>


                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Bilateral:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-4`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Abdominal Pain:</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Diarrhea:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Upset Stomach:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Abdominal Bloating:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Abdominal Gas:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-4`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Chest Pain:</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Shortness of Breath:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Hypertension:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                Waking up frequently during the night:
                              </label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Palpitations:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-4`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Irregular Heartbeats:</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Sexual Problems:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Trouble Falling Asleep:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                Diabetes:
                              </label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Excessive Pain:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-6`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Headaches:</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Sudden Confusion:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Forget recent conversation:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Misplacing Items:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Poor Judgement:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Swallowing problems:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Dizziness or vertigo:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>
                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-6`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Forgets recent events:</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Language Problem:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Difficulty in reading:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                Difficulty in writing:
                              </label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Nausea:</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-12`}
                          >

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <h4 style={{ fontSize: "18px" }}>General Comments</h4>
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>

                    <TabPanel>
                      <form className={`${presentcomplainStyles.Form}`}>
                        <div className={`${presentcomplainStyles.Toprow}`}>
                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Pain</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Swelling</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Radicular Pain</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                              <label>Numbness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the numbness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>

                              <label>Tingling</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                          </div>

                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <h4>Muscle Spasms</h4>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the muscle spasm?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Stiffness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the stiffness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Decreased ROM</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the decreased in range of
                                motion?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Clicking</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>
                                How often do you feel the clicking?
                              </label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>
                          </div>


                          <div
                            className={`${presentcomplainStyles.Paincard} col-md-3`}
                          >
                            <div className={`${presentcomplainStyles.Title}`}>
                              <label>Weekness</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>How often do you feel the weakness?</label>
                              <input type="text" placeholder="Eg. your text here" />
                            </div>

                            <div className={`${presentcomplainStyles.Inputgroup}`}>
                              <label>Muscle Guarding</label>

                              <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                              />
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

                            <div className={`${presentcomplainStyles.Inputgroup}`} style={{ display: "block" }}>
                              <label>Comments</label> <br />
                              <textarea cols="30" rows="8" placeholder="Eg. your text here" />
                            </div>
                          </div>

                        </div>

                        <div className={`${presentcomplainStyles.Button}`}>
                          <button>Save</button>
                        </div>
                      </form>
                    </TabPanel>



                  </Tabs>

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