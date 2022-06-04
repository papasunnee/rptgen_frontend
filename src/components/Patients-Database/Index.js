import React, { Fragment } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";
import PatientList from "./patientList";

import appointmenticon from "@/images/appointment-icon.png";
import newpatientsicon from "@/images/newpatients-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import frame47Styles from "../Frame47/Frame47.module.scss";
import ScheduleAppointment from "../Modals/ScheduleAppointment";

function Index() {
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
                    <div
                      className={`${frame47Styles.Top}`}
                      style={{ marginBottom: "5%" }}
                    >
                      <h3>Patient Database</h3>

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
                  </div>

                  <div className={`${frame44Styles.Toptabs} row`}>
                    <div
                      className={`${frame47Styles.Toptabs_title}`}
                      style={{ paddingBottom: "15px" }}
                    >
                      <h3>Quick Tasks</h3>
                    </div>

                    <ScheduleAppointment />

                    <span className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Add Complaint</h4>
                      </div>
                    </span>

                    <span className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Operations</h4>
                      </div>
                    </span>
                  </div>
                  {/* <PatientList /> */}
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
