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

import demographicsStyles from "../Patient-Demographics/Demographics.module.scss";

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
                  <div
                    className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Pre-Authorization</h3>

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

                  <form className={`${demographicsStyles.Form}`}>
                    <div className={`${demographicsStyles.Header_section}`}>
                      <h3>Interpreter</h3>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Name</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Language</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              $
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Certification</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${demographicsStyles.Header_section}`}>
                      <h3>Pre-Authorization Questionaire</h3>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Insurance Company</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Address</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>City, State, Zip</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Claim Adjuster</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Claim Number</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Telephone</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Fax</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${demographicsStyles.Header_section}`}>
                      <h3>WCAB</h3>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Name</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Address</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>City, State, Zip</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Fax</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Telephone</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>EAMS/ADJUSTER</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${demographicsStyles.Header_section}`}>
                      <h3>Employer</h3>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Name</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Address</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>City, State, Zip</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Fax</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Telephone</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>EAMS/ADJUSTER</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${demographicsStyles.Header_section}`}>
                      <h3>First Contact Attempt</h3>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Date</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Time</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Contact Name</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`${demographicsStyles.Inputflex}`}>
                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Title Position</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>

                        <div className={`${demographicsStyles.Input_cont}`}>
                          <label>Result</label>

                          <div
                            className={`${demographicsStyles.Inputgroup} input-group mb-3`}
                          >
                            <span
                              className={`input-group-text`}
                              id="basic-addon1"
                            >
                              &nbsp;
                            </span>
                            <input
                              type="text"
                              className={`form-control`}
                              placeholder="Eg. your text here"
                              aria-label="Username"
                              aria-describedby="basic-addon1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${demographicsStyles.Button}`}>
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
