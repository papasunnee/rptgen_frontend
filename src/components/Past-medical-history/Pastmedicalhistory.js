import React, { Fragment } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
import PastMedicalHistoryTrigger from "../Modals/PastMedicalHistoryTrigger";
import PastMedicalHistoryList from "./pastMedicalHistoryList";
import OtherMedicalHistoryList from "./otherMedicalHistory";
import OtherMedicalHistoryTrigger from "../Modals/OtherMedicalHistory";

function Pastmedicalhistory() {
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
                      <h3>Medical History</h3>

                      <SearchPatient />
                    </div>

                    <PatientInfo />
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>

                    <PastMedicalHistoryTrigger />

                    <OtherMedicalHistoryTrigger />

                    {/* <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Search</h4>
                      </div>
                    </div> */}
                  </div>

                  <Tabs>
                    <div
                      className={`${functionalStyles.Formtab_titles}`}
                      style={{ marginTop: "6%" }}
                    >
                      <TabList
                        className={`${functionalStyles.Formtab_titles} col-md-10`}
                        style={{ padding: 0 }}
                      >
                        <Tab className={`${functionalStyles.Tab}`}>
                          <h4>Past Medical History</h4>
                        </Tab>

                        <Tab className={`${functionalStyles.Tab}`}>
                          <h4 style={{ color: "#336CFB" }}>
                            Past Related Medical History
                          </h4>
                        </Tab>

                        <Tab className={`${functionalStyles.Tab}`}>
                          <h4>Other Past Medical History</h4>
                        </Tab>
                      </TabList>
                    </div>

                    <TabPanel className={`${frame44Styles.Appointment_activity}`}>
                      <PastMedicalHistoryList />
                    </TabPanel>

                    <TabPanel className={`${frame44Styles.Appointment_activity}`}>
                      <h1>Hello There!!!</h1>
                    </TabPanel>

                    <TabPanel className={`${frame44Styles.Appointment_activity}`}>

                      <OtherMedicalHistoryList />

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

export default Pastmedicalhistory;
