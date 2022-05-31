import React, { Fragment } from "react";
import Image from "next/image";

import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { BsSearch } from "react-icons/bs";

import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";
import AppointmentList from "@/components/Appoinments/appointmentList";
import moreimg from "@/images/more-icon.png";
import profilepic from "@/images/profile-1.png";
import appointmenticon from "@/images/appointment-icon.png";
import operationicon from "@/images/operation-icon.png";
import hospitalearningicon from "@/images/hospitalearning-icon.png";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

import frame44Styles from "./Frame44.module.scss";

import PatientStat from "./PatientStat";
import AppointmentStat from "./AppointmentStat";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#00457c",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

function Frame44() {
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
                  <div className={`${frame44Styles.Toptabs} row`}>
                    <AppointmentStat />

                    <PatientStat />

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Operations</h4>
                        <h3>{0}</h3>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Hospital Earnings</h4>
                        <h3>$ {0}</h3>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Bottomrow} row`}>
                    <div className={`${frame44Styles.Monthlyreport} col-md-12`}>
                      <div className={`${frame44Styles.Title}`}>
                        <h4>Platform Activity</h4>

                        <div className={`${frame44Styles.Graphcolor} col-md-4`}>
                          <div className={`${frame44Styles.Policy} col-md-5`}>
                            <div
                              className={`${frame44Styles.Color}`}
                              style={{ background: "#FAC032" }}
                            ></div>

                            <h4>Patients 2019</h4>
                          </div>

                          <div className={`${frame44Styles.Policy} col-md-5`}>
                            <div
                              className={`${frame44Styles.Color}`}
                              style={{ background: "#336CFB" }}
                            ></div>

                            <h4>Patients 2020</h4>
                          </div>
                        </div>
                      </div>

                      <Line
                        data={state}
                        options={{
                          title: {
                            display: true,
                            text: "Average Rainfall per month",
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                      />
                    </div>
                  </div>

                  <AppointmentList title="Appointment Activity" />
                </div>
                {/* </div> */}
              </div>
            </main>
          </div>
          {/* </div>
                    </div> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Frame44;
