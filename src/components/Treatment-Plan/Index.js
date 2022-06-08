import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

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
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";

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
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Treatment Plan</h3>

                      <SearchPatient />
                    </div>

                    <PatientInfo />
                  </div>

                  <form className={`${planStyles.Form}`}>
                    <div className={`${planStyles.Toprow}`}>
                      <div className={`${planStyles.Title}`}>
                        <h3>Main Menu</h3>
                      </div>

                      <div className={`${planStyles.Cardcon}`}>
                        <Link href="/doctor/treatment-plan/xray">
                          <a className={`${planStyles.Card}`}>
                            <h4>X-Ray</h4>

                            {/* <p>2 Items</p> */}

                            <p>2 Items</p>
                          </a>
                        </Link>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>FUNCTIONAL RESTORATION</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>CHIRO EXTENDED</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>CONTINUED PHARMA</h4>

                          <p>2 Items</p>
                        </a>

                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>MRI</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>MISC</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>EXERCISE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>BIOFEEDBACK</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>FIM</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>FUNCTIONAL RESTORATION</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>FCE</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>INTERVENTIONAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>EMG/NCV</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>PT TRIAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>MULTIDISCPLINARY</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>SPECIALTY REFERRAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>MEDICATION</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>PT EXTENDED</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>SURGERY</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>INJECTION</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>SUPPLIES</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>ACU TRIAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>PTP INITIAL EVAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>FMC</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>CHRONIC PAIN</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>ACU EXTENDED</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>PHARMACOLOGICAL</h4>

                          <p>2 Items</p>
                        </a>
                        <a href="" className={`${planStyles.Card} col-md-4`}>
                          <h4>OTHER TREATMENT</h4>

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

export default Index;
