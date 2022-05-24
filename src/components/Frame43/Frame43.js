import React, { Fragment } from "react";
import Image from "next/image";

import { BsSearch } from "react-icons/bs";

import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";

import moreimg from "@/images/more-icon.png";
import profilepic from "@/images/profile-1.png";

import frame44Styles from "../Frame44/Frame44.module.scss";

import frame43Styles from "./Frame43.module.scss";

function Frame43() {
  return (
    <Fragment>
      <div
        className={`${frame43Styles.Frame34} container-fluid overflow-hidden`}
      >
        <div
          className={`${frame43Styles.Heightadjust} row vh-100 overflow-auto`}
        >
          <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

          <div className={`col d-flex flex-column h-sm-100`}>
            <main className={`row overflow-auto`}>
              <div className={`${frame43Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div className={`${frame43Styles.Body}`}>
                  <div className={`${frame43Styles.Patientsdatabase_top} `}>
                    <div
                      className={`${frame43Styles.Patientsdatabase_titlesection}`}
                    >
                      <h3>Patients Database</h3>

                      <div
                        className={`${frame43Styles.Titlesection_cont} col-md-6`}
                      >
                        <div className={`${frame43Styles.Btn}`}>
                          <button>Add Patients</button>
                        </div>

                        <div className={`${frame43Styles.Filter} col-md-6`}>
                          <div className={`${frame43Styles.Con}`}>
                            <h5>Sort</h5>
                          </div>

                          <div className={`${frame43Styles.Con}`}>
                            <h5>Filter</h5>
                          </div>

                          <div className={`${frame43Styles.Con}`}>
                            <h5>Range</h5>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${frame43Styles.Patientsdatabase_tablehead}`}
                    >
                      <div className={`${frame43Styles.Name}`}>
                        <h4>Name</h4>
                      </div>

                      <div className={`${frame43Styles.Namecon} col-md-6`}>
                        <div className={`${frame43Styles.Name}`}>
                          <h4>Date Online</h4>
                        </div>

                        <div className={`${frame43Styles.Name}`}>
                          <h4>Due for checkup</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${frame43Styles.Patientslist}`}>
                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button>1 DAY</button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button style={{ background: "#FEC400" }}>
                              3 DAYS
                            </button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button>1 DAY</button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button style={{ background: "#29CC97" }}>
                              1 WEEK
                            </button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button>1 DAY</button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button style={{ background: "#29CC97" }}>
                              1 WEEK
                            </button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button style={{ background: "#FEC400" }}>
                              3 DAYS
                            </button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame43Styles.Patient}`}>
                      <div className={`${frame43Styles.Cont}`}>
                        <div className={`${frame43Styles.Profilepic}`}>
                          <Image src={profilepic} alt="profilepic-img" />
                        </div>

                        <div className={`${frame43Styles.Patientname}`}>
                          <h4>Juan Dela Cruz</h4>
                          <h5>Updated 1 day ago</h5>
                        </div>
                      </div>

                      <div className={`${frame43Styles.Datecont} col-md-6`}>
                        <div className={`${frame43Styles.Dateonline}`}>
                          <h4>May 26, 2019</h4>
                          <h5>6:30 PM</h5>
                        </div>

                        <div className={`${frame43Styles.Duedate} col-md-3`}>
                          <div className={`${frame43Styles.Button}`}>
                            <button style={{ background: "#29CC97" }}>
                              2 WEEKS
                            </button>
                          </div>

                          <div className={`${frame43Styles.Icon}`}>
                            <Image src={moreimg} alt="more-icon" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className={`${frame43Styles.Pagenavigation}`}>
                                    <div className={`${frame43Styles.Rows_per_page}`}>
                                        <h4>Rows per page</h4>
                                        <p>8</p>
                                    </div>
                                </div> */}
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

export default Frame43;
