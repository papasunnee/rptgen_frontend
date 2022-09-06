import React, { Fragment } from "react";
import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";
import frame44Styles from "../Frame44/Frame44.module.scss";
import frame47Styles from "../Frame47/Frame47.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";
import JobDescriptionTrigger from "../Modals/JobDescriptionTrigger";
import JobDescriptionList from "./jobDescriptionList";

function Jobdescription() {
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
                      <h3>Job Description</h3>

                      <SearchPatient />
                    </div>
                    <PatientInfo />
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>
                    <JobDescriptionTrigger />
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <JobDescriptionList />
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Jobdescription;
