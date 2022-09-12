import React, { Fragment, useContext, useState } from "react";
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

import SearchPatient from "../Patients-Database/searchPatient";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import { UserContext } from "@/context/UserContext";
import CervicalForm from "./CervicalForm";
import LumberForm from "./LumberForm";
import ThoracicForm from "./ThoracicForm";
import RightHipForm from "./RightHipForm";
import RightShoulderForm from "./RightShoulderForm";
import LeftHipForm from "./LeftHipForm";
import LeftShoulderForm from "./LeftShoulderForm";
import RightKneeForm from "./RightKneeForm";
import RightElbowForm from "./RightElbowForm";
import LeftKneeForm from "./LeftKneeForm";
import LeftElbowForm from "./LeftElbowForm";
import RightFootForm from "./RightFootForm";
import RightWristForm from "./RightWristForm";
import LeftFootForm from "./LeftFootForm";
import LeftWristForm from "./LeftWristForm";
import MicsForm from "./MicsForm";
import RightHandForm from "./RightHandForm";

const initialValues = {
  sudden_confusion: false,
};
function Index() {
  const [modalShow, setModalShow] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState([...BodyParts]);
  const data = useContext(UserContext);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckChange = (label) => {
    setForm((prev) => ({
      ...prev,
      [label]: !form[label],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form).every(
      (item) => item === null || item === "" || item == false
    );
    if (!isEmpty) {
      try {
        const response = await fetch("/api/patient/presentcomplaint", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            patient_id: data._id,
            form_number: "4",
            complaint_name: formName,
          }),
        });
        const presentComplaint = await response.json();
        if (presentComplaint.success) {
          setSuccessMessage("Patient Present Complaint Successfully Updated");
          setForm(initialValues);
          setTimeout(() => setSuccessMessage(null), 5000);
        } else {
          throw new Error("Cannot Update Present Complaint Data");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError("Please Fill at least one field");
    }
    setLoading(false);
  };
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
                      <CervicalForm />
                    </TabPanel>

                    <TabPanel>
                      <LumberForm />
                    </TabPanel>

                    <TabPanel>
                      <ThoracicForm />
                    </TabPanel>

                    <TabPanel>
                      <RightHipForm />
                    </TabPanel>

                    <TabPanel>
                      <RightShoulderForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftHipForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftShoulderForm />
                    </TabPanel>

                    <TabPanel>
                      <RightKneeForm />
                    </TabPanel>

                    <TabPanel>
                      <RightElbowForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftKneeForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftElbowForm />
                    </TabPanel>

                    <TabPanel>
                      <RightFootForm />
                    </TabPanel>

                    <TabPanel>
                      <RightWristForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftFootForm />
                    </TabPanel>

                    <TabPanel>
                      <LeftWristForm />
                    </TabPanel>

                    <TabPanel>
                      <MicsForm />
                    </TabPanel>

                    <TabPanel>
                      <RightHandForm />
                    </TabPanel>

                    <TabPanel>
                      <RightHandForm />
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
