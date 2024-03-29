import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";

import { Accordion, Card, Button } from "react-bootstrap";

import logoimg from "@/images/logo.png";
import overviewicon from "@/images/overview-icon.png";
import acupunctureicon from "@/images/acupuncture-icon.png";
import doctorsicon from "@/images/doctors-icon.png";
import formsicon from "@/images/forms-icon.png";
import historianicon from "@/images/historian-icon.png";
import logouticon from "@/images/logout-icon.png";
import frame34Styles from "./Sidenav.module.scss";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

function Sidenav() {
  const { logout } = useAuth();
  const router = useRouter();
  const id = router.query?.id;

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      let resp = await logout();
      if (resp.success) {
        return router.replace("/");
      }
    } catch (e) {
      console.log(e.message);
    }
    return;
  };

  function openNav() {
    document.getElementById("link").style.backgroundColor = "red";

    // If localStorage is supported by the browser
    if (typeof Storage !== "undefined") {
      // Save the state of the sidebar as "open"
      localStorage.setItem("sidebar", "opened");
    }
  }

  return (
    <Fragment>
      <span
        className={`${frame34Styles.Sidenav} col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex`}
      >
        <div
          className={`d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start pt-2 text-white`}
        >
          <Link
            href="/"
            passHref
            className={`${frame34Styles.Logo} d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none`}
          >
            <div className={`fs-5  d-sm-inline`}>
              <Image src={logoimg} alt="logo-img" />
            </div>
          </Link>
          <ul
            className={`${frame34Styles.Navpills} nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start`}
            id="menu"
          >
            <li className={`${frame34Styles.Navitem}`}>
              <Link href="/dashboard/home">
                <a className={`${frame34Styles.Navlink} align-middle px-0`}>
                  <Image src={overviewicon} alt="overview-icon" />{" "}
                  <div className={`ms-1 d-none d-sm-inline`}>Overview</div>
                </a>
              </Link>
            </li>

            <Accordion
              defaultActiveKey={["0"]}
              alwaysOpen
              className={`${frame34Styles.Accordition}`}
            >
              <Accordion.Item
                eventKey="0"
                className={`${frame34Styles.Dropdownbutton}`}
              >
                <Accordion.Header>
                  <Image src={overviewicon} alt="overview-icon" />
                  {/* &nbsp; Patients */}
                  <div className={`ms-1 d-none d-sm-inline`}>Patients</div>
                </Accordion.Header>

                <Accordion.Body className={`${frame34Styles.Accorditionbody}`}>
                  <Link href="/patient/database">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0`}
                    >
                      Patient Database
                    </a>
                  </Link>

                  <Link href="/patient/appoinments">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0 px-0`}
                    >
                      <div className={`d-sm-inline`}>Appoinments</div>
                    </a>
                  </Link>
                </Accordion.Body>
              </Accordion.Item>

              <Dropdown.Menu className={`${frame34Styles.Dropdownmenu}`}>
                <Dropdown.Item href="#">
                  <Link href="/patient/database">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0`}
                    >
                      Patient Database
                    </a>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <Link href="/patient/appoinments">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0 px-0`}
                    >
                      <div className={`d-sm-inline`}>Appoinments</div>
                    </a>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Accordion>

            {id && id != "undefined" && (
              <>
                <Accordion className={`${frame34Styles.Accordition}`}>
                  <Accordion.Item
                    eventKey="0"
                    className={`${frame34Styles.Dropdownbutton}`}
                  >
                    <Accordion.Header>
                      <Image src={historianicon} alt="historian-icon" />
                      {/* &nbsp; Patients */}
                      <div className={`ms-1 d-none d-sm-inline`}>Historian</div>
                    </Accordion.Header>

                    <Accordion.Body
                      className={`${frame34Styles.Accorditionbody}`}
                    >
                      <Link href={`/historian/${id}/demographics`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>
                            Patient Demographics
                          </div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/pre-authorization`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Pre-authorization</div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/functional-improvement`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>
                            Functional Improvement
                          </div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/job-description`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Job Description</div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/present-complaints`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Complaints</div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/past-medical-history`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Medical History</div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/specific-accident`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Specific Accident</div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/cumulative-trauma`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>
                            Cumulative Trauma
                          </div>
                        </a>
                      </Link>

                      <Link href={`/historian/${id}/mpn`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>
                            MPN
                          </div>
                        </a>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Dropdown.Menu className={`${frame34Styles.Dropdownmenu}`}>
                    <Dropdown.Item href="#">
                      <Link href="/patient/database">
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          Patient Database
                        </a>
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#">
                      <Link href="/patient/appoinments">
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0 px-0`}
                        >
                          <div className={`d-sm-inline`}>Appoinments</div>
                        </a>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Accordion>

                <Accordion className={`${frame34Styles.Accordition}`}>
                  <Accordion.Item
                    eventKey="0"
                    className={`${frame34Styles.Dropdownbutton}`}
                  >
                    <Accordion.Header>
                      <Image src={doctorsicon} alt="doctors-icon" />
                      {/* &nbsp; Patients */}
                      <div className={`ms-1 d-none d-sm-inline`}>Doctors</div>
                    </Accordion.Header>

                    <Accordion.Body
                      className={`${frame34Styles.Accorditionbody}`}
                    >
                      <Link href={`/doctor/${id}/diagnosis`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Diagnosis</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/upload-records`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Upload Record</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/physical-evaluation`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>
                            Physical Evaluation
                          </div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/mil-evaluation`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>MIL Evaluation</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/present-complaints`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Complaints</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/superbills`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Superbills</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/workstatus`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Work Status</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/treatment-plan`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Treatment Plan</div>
                        </a>
                      </Link>

                      <Link href={`/doctor/${id}/bill-reduction`}>
                        <a
                          className={`${frame34Styles.Navlink} dropdown-item px-0`}
                        >
                          <div className={`d-sm-inline`}>Bill Reduction</div>
                        </a>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            )}

            <li className={`${frame34Styles.Navitem}`}>
              <a className={`${frame34Styles.Navlink} align-middle px-0`}>
                <Image src={formsicon} alt="overview-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Forms</div>
              </a>
            </li>

            <li className={`${frame34Styles.Navitem}`}>
              <a className={`${frame34Styles.Navlink} align-middle px-0`}>
                <Image src={acupunctureicon} alt="overview-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Acupuncture</div>
              </a>
            </li>

            <li className={`${frame34Styles.Navitem}`}>
              <a className={`${frame34Styles.Navlink} align-middle px-0`}>
                <Image src={acupunctureicon} alt="overview-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Admin</div>
              </a>
            </li>
          </ul>

          <hr />
          <ul className={`${frame34Styles.Logout} pb-4`}>
            <li className={`${frame34Styles.Navitem}`}>
              <a
                className={`${frame34Styles.Navlink} align-middle px-0`}
                style={{ cursor: "pointer" }}
              >
                <Image src={logouticon} alt="logout-icon" />{" "}
                <div
                  className={`ms-1 d-none d-sm-inline`}
                  onClick={handleLogout}
                >
                  Log Out
                </div>
              </a>
            </li>
          </ul>

          {/* <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                        <a  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                            <div className="d-none d-sm-inline mx-1">Joe</div>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" >New project...</a></li>
                            <li><a className="dropdown-item" >Settings</a></li>
                            <li><a className="dropdown-item" >Profile</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" >Sign out</a></li>
                        </ul>
                    </div> */}
        </div>
      </span>
    </Fragment>
  );
}

export default Sidenav;
