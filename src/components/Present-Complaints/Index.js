import React, { Fragment, useState } from "react";
import Image from "next/image";
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
import FormComp from "./FormComp";
import FormComp2 from "./FormComp2";
import FormComp3 from "./FormComp3";
import FormComp4 from "./FormComp4";
import FormComp5 from "./FormComp5";

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
                  className={`${functionalStyles.Selectitems} ${
                    item.isActive ? functionalStyles.activeSelection : ""
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

const initialValues = {
  body_parts: [],
};
function Index() {
  const [modalShow, setModalShow] = useState(false);
  const [form, setForm] = useState(initialValues);
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

                <div
                  className={`${frame44Styles.Body}`}
                  style={{ padding: "12px" }}
                >
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
                        {selectedBodyPart.map(
                          (item) =>
                            item.isActive && (
                              <Tab className={`${presentcomplainStyles.Tab}`}>
                                <h4>{item.name}</h4>
                              </Tab>
                            )
                        )}
                      </TabList>
                    </div>
                    {selectedBodyPart.map(
                      (item, index) =>
                        item.isActive && (
                          <TabPanel key={index}>{item.component}</TabPanel>
                        )
                    )}
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
  {
    id: 0,
    name: "Cervical Spine",
    isActive: false,
    component: <FormComp formName="Cervical Spine" />,
  },
  {
    id: 1,
    name: "Thoracic Spine",
    isActive: false,
    component: <FormComp formName="Thoracic Spine" />,
  },
  {
    id: 2,
    name: "Right Shoulder",
    isActive: false,
    component: <FormComp formName="Right Shoulder" />,
  },
  {
    id: 3,
    name: "Left Shoulder",
    isActive: false,
    component: <FormComp formName="Left Shoulder" />,
  },
  {
    id: 4,
    name: "Right Elbow",
    isActive: false,
    component: <FormComp2 formName="Right Elbow" />,
  },
  {
    id: 5,
    name: "Left Elbow",
    isActive: false,
    component: <FormComp2 formName="Left Elbow" />,
  },
  {
    id: 6,
    name: "Right Wrist",
    isActive: false,
    component: <FormComp formName="Right Wrist" />,
  },
  {
    id: 7,
    name: "Left Wrist",
    isActive: false,
    component: <FormComp formName="Left Wrist" />,
  },
  {
    id: 8,
    name: "Right Hand",
    isActive: false,
    component: <FormComp formName="Right Hand" />,
  },
  {
    id: 9,
    name: "Left Hand",
    isActive: false,
    component: <FormComp formName="Left Hand" />,
  },
  {
    id: 10,
    name: "Other",
    isActive: false,
    component: <FormComp formName="Other" />,
  },
  {
    id: 11,
    name: "Lumbar Spine",
    isActive: false,
    component: <FormComp formName="Lumbar Spine" />,
  },
  {
    id: 12,
    name: "Right Hip",
    isActive: false,
    component: <FormComp formName="Right Hip" />,
  },
  {
    id: 13,
    name: "Left Hip",
    isActive: false,
    component: <FormComp formName="Left Hip" />,
  },
  {
    id: 14,
    name: "Right Knee",
    isActive: false,
    component: <FormComp formName="Right Knee" />,
  },
  {
    id: 14,
    name: "Left Knee",
    isActive: false,
    component: <FormComp formName="Left Knee" />,
  },
  {
    id: 16,
    name: "Right Foot",
    isActive: false,
    component: <FormComp formName="Right Foot" />,
  },
  {
    id: 17,
    name: "Left Foot",
    isActive: false,
    component: <FormComp formName="Left Foot" />,
  },
  {
    id: 18,
    name: "Internal",
    isActive: false,
    component: <FormComp3 formName="Internal" />,
  },
  {
    id: 19,
    name: "Neuro",
    isActive: false,
    component: <FormComp4 formName="Neuro" />,
  },
  {
    id: 20,
    name: "General Comment",
    isActive: false,
    component: <FormComp5 formName="General Comment" />,
  },
];
