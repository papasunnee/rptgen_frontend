import React, { Fragment } from "react";
import Image from "next/image";

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

import demographicsStyles from "./Demographics.module.scss";
import DemographicForm from "./DemographicForm";
import PatientInfo from "./PatientInfo";
import SearchPatient from "../Patients-Database/searchPatient";

function Index({ patient }) {
  return (
    <Fragment>
      <div className={`${frame44Styles.Frame34} container-fluid`}>
        <div className={`${frame44Styles.Heightadjust} row vh-100`}>
          <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

          <div className={`col d-flex flex-column h-sm-100`}>
            <main className={`row`}>
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div
                  className={`${frame44Styles.Body}`}
                  style={{ position: "relative" }}
                >
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Patient Demographics</h3>

                      <SearchPatient />
                    </div>

                    <PatientInfo patient={patient} />
                  </div>

                  <div className={`${demographicsStyles.Formtab_titles}`}>
                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#headerinfo">Header Information</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#insuranceinfo">Insurance Information</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#accountRep"> Account Representative</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#applicantAttorney"> Applicant Attorney</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#defenceAttorney"> Defense Attorney</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#wcab"> WCAB</a>
                    </div>

                    <div className={`${demographicsStyles.Tab}`}>
                      <a href="#referringPhysician"> Referring Physician</a>
                    </div>
                  </div>

                  <DemographicForm />
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
