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

                <div
                  className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Patients Details</h3>

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

                    <div className={`${frame47Styles.Details}`}>
                      <div className={`${frame47Styles.Namecont}`}>
                        <div className={`${frame47Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profile-pic" />
                        </div>

                        <div className={`${frame47Styles.Name}`}>
                          <h4 className={`${frame47Styles.Bigname}`}>
                            Gerson Basconcillo
                          </h4>
                          <h5>See Patient info</h5>
                        </div>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Address: 46 Amity Ext, Paranaque City</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Contact +7 (4812) 11-22-33</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Birthdate: 06/45/1990</h4>
                      </div>

                      <div className={`${frame47Styles.Namecont}`}>
                        <h4>Age: 32</h4>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3>Quick Tasks</h3>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={appointmenticon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Add Cumulative Trauma</h4>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Tab} col-md-3`}>
                      <div className={`${frame44Styles.Image}`}>
                        <Image src={newpatientsicon} alt="icon-img" />
                      </div>

                      <div className={`${frame44Styles.Content}`}>
                        <h4>Search</h4>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame44Styles.Appointment_activity}`}>
                    <div className={`${frame44Styles.Title}`}>
                      <h3>History</h3>
                    </div>

                    <div className={`${frame44Styles.Appointmentlist_section}`}>
                      <div className={`${frame44Styles.Appointmentlist_title}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Name</h4>
                        </div>

                        <div
                          className={`${frame44Styles.Name}`}
                          style={{ marginLeft: "4%" }}
                        >
                          <h4>Date</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Doctor</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Action</h4>
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>

                      <div className={`${frame44Styles.Appointment}`}>
                        <div className={`${frame44Styles.Name}`}>
                          <h4>Lesile Alexander</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>10/10/2020</h4>
                        </div>

                        <div className={`${frame44Styles.Name}`}>
                          <h4>Dr. Jacob Jones</h4>
                        </div>

                        <div className={`${frame44Styles.Action_buttons}`}>
                          <Image src={editicon} alt="edit-icon" />
                          <Image src={deleteicon} alt="delete-icon" />
                        </div>
                      </div>
                    </div>
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

export default Index;
