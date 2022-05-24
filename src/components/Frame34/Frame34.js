import React, { Fragment, Component } from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

import Image from "next/image";

import logoimg from "@/images/logo.png";
import overviewicon from "@/images/overview-icon.png";
import acupunctureicon from "@/images/acupuncture-icon.png";
import doctorsicon from "@/images/doctors-icon.png";
import formsicon from "@/images/forms-icon.png";
import historianicon from "@/images/historian-icon.png";
import logouticon from "@/images/logout-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";

import frame34Styles from "./Frame34.module.scss";
import { BsSearch } from "react-icons/bs";

import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";

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

class Frame34 extends Component {
  render() {
    return (
      <Fragment>
        <div
          className={`${frame34Styles.Frame34} container-fluid overflow-hidden`}
        >
          <div
            className={`${frame34Styles.Heightadjust} row vh-100 overflow-auto`}
          >
            <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

            <div className={`col d-flex flex-column h-sm-100`}>
              <main className={`row overflow-auto`}>
                <div className={`${frame34Styles.Contentcon} col pt-4`}>
                  <Topnav />

                  <div className={`${frame34Styles.Body}`}>
                    <div className={`${frame34Styles.Toprow} row`}>
                      <div
                        className={`${frame34Styles.Systemtraffic} col-md-5`}
                      >
                        <div className={`${frame34Styles.Title}`}>
                          <h4>System Traffic</h4>
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

                      <div
                        className={`${frame34Styles.Patientsentries} col-md-3`}
                      >
                        <div className={`${frame34Styles.Title}`}>
                          <h1>80</h1>
                          <h4>Patient Entries</h4>
                        </div>

                        <div className={`${frame34Styles.Progressbars}`}>
                          <div className={`${frame34Styles.Inprogress}`}>
                            <div className={`${frame34Styles.Progressstatus}`}>
                              <h5>In Progress</h5>
                              <h4>40</h4>
                            </div>

                            <div
                              className={`${frame34Styles.Progress} progress`}
                            >
                              <div
                                className={`${frame34Styles.Progressbar} progress-bar`}
                                role="progressbar"
                                style={{
                                  width: "45%",
                                  background:
                                    "linear-gradient(90deg, #33d69f 0%, #50edb8 111.47%)",
                                }}
                              ></div>
                            </div>
                          </div>

                          <div className={`${frame34Styles.Inprogress}`}>
                            <div className={`${frame34Styles.Progressstatus}`}>
                              <h5>Finished</h5>
                              <h4>40</h4>
                            </div>

                            <div
                              className={`${frame34Styles.Progress} progress`}
                            >
                              <div
                                className={`${frame34Styles.Progressbar} progress-bar`}
                                role="progressbar"
                                style={{
                                  width: "80%",
                                  background:
                                    "linear-gradient(90deg, #E93F33 0%, #A886E9 111.47%)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`${frame34Styles.Patientsentries} col-md-3`}
                      >
                        <div className={`${frame34Styles.Title}`}>
                          <h1>10</h1>
                          <h4>Patients for Exam</h4>
                        </div>

                        <div className={`${frame34Styles.Progressbars}`}>
                          <div className={`${frame34Styles.Inprogress}`}>
                            <div className={`${frame34Styles.Progressstatus}`}>
                              <h5>In Progress</h5>
                              <h4>10</h4>
                            </div>

                            <div
                              className={`${frame34Styles.Progress} progress`}
                            >
                              <div
                                className={`${frame34Styles.Progressbar} progress-bar`}
                                role="progressbar"
                                style={{
                                  width: "45%",
                                  background:
                                    "linear-gradient(90deg, #33d69f 0%, #50edb8 111.47%)",
                                }}
                              ></div>
                            </div>
                          </div>

                          <div className={`${frame34Styles.Inprogress}`}>
                            <div className={`${frame34Styles.Progressstatus}`}>
                              <h5>Finished</h5>
                              <h4>90</h4>
                            </div>

                            <div
                              className={`${frame34Styles.Progress} progress`}
                            >
                              <div
                                className={`${frame34Styles.Progressbar} progress-bar`}
                                role="progressbar"
                                style={{
                                  width: "80%",
                                  background:
                                    "linear-gradient(90deg, #E93F33 0%, #A886E9 111.47%)",
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame34Styles.Bottomrow} row`}>
                      <div
                        className={`${frame34Styles.Monthlyreport} col-md-7`}
                      >
                        <div className={`${frame34Styles.Title}`}>
                          <h4>Monthly Reports</h4>

                          <div
                            className={`${frame34Styles.Graphcolor} col-md-5`}
                          >
                            <div className={`${frame34Styles.Policy} col-md-5`}>
                              <div className={`${frame34Styles.Color}`}></div>

                              <h4>Policy</h4>
                            </div>

                            <div className={`${frame34Styles.Policy} col-md-5`}>
                              <div className={`${frame34Styles.Color}`}></div>

                              <h4>Clame</h4>
                            </div>
                          </div>
                        </div>

                        <Bar
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

                    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script> */}
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Frame34;
