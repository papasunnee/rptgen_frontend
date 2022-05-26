import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const handleLogout = async (event) => {
    event.preventDefault();
    await logout();
    router.push("/");
    return;
  };
  return (
    <Fragment>
      <span
        className={`${frame34Styles.Sidenav} col-12 col-sm-3 col-xl-2 px-sm-2 px-0 d-flex`}
      >
        <div
          className={`d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white`}
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

            <li className={`${frame34Styles.Navitemdropdown} dropdown`}>
              <a
                href="#patientsmenu"
                className={`${frame34Styles.Navlink} nav-link dropdown-toggle px-sm-0 px-1`}
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={overviewicon} alt="overview-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Patients</div>
              </a>

              <ul
                className={`${frame34Styles.Navitemcollapse} dropdown-menu text-small`}
                id="patientsmenu"
                aria-labelledby="dropdown"
              >
                <li className={`w-100`}>
                  <Link href="/patient/database">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0`}
                    >
                      {" "}
                      <div className={`d-sm-inline`}>Patient Database</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/patient/appoinments">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Appoinments</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

            <li className={`${frame34Styles.Navitemdropdown} dropdown`}>
              <a
                href="#historianmenu"
                className={`${frame34Styles.Navlink} nav-link dropdown-toggle px-sm-0 px-1`}
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={historianicon} alt="historian-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Historian</div>
              </a>

              <ul
                className={`${frame34Styles.Navitemcollapse} dropdown-menu text-small`}
                id="historianmenu"
                aria-labelledby="dropdown"
              >
                <li className={`w-100`}>
                  <Link href="/historian/demographics">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0`}
                    >
                      <div className={`d-sm-inline`}>Patient Demographics</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/historian/pre-authorization">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Pre-authorization</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/historian/functional-improvement">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>
                        Functional Improvement
                      </div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/historian/job-description">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Job Description</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <a
                    href="present-complaints"
                    className={`${frame34Styles.Navlink} px-0`}
                  >
                    {" "}
                    <div className={`d-sm-inline`}>Complaints</div>
                  </a>
                </li>

                <li className={`w-100`}>
                  <Link href="/historian/past-medical-history">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Medical History</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <a className={`${frame34Styles.Navlink} px-0`}>
                    <div className={`d-sm-inline`}>Specific Accident</div>
                  </a>
                </li>

                <li className={`w-100`}>
                  <Link href="/historian/cumulative-trauma">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Cummulative Trauma</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <a className={`${frame34Styles.Navlink} px-0`}>
                    <div className={`d-sm-inline`}>MPN</div>
                  </a>
                </li>
              </ul>
            </li>

            <li className={`${frame34Styles.Navitemdropdown} dropdown`}>
              <a
                href="#historianmenu"
                className={`${frame34Styles.Navlink} nav-link dropdown-toggle px-sm-0 px-1`}
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image src={doctorsicon} alt="doctors-icon" />{" "}
                <div className={`ms-1 d-none d-sm-inline`}>Doctors</div>
              </a>

              <ul
                className={`${frame34Styles.Navitemcollapse} dropdown-menu text-small`}
                id="historianmenu"
                aria-labelledby="dropdown"
              >
                <li className={`w-100`}>
                  <Link href="/doctor/diagnosis">
                    <a
                      className={`${frame34Styles.Navlink} dropdown-item px-0`}
                    >
                      <div className={`d-sm-inline`}>Diagnosis</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/upload-records">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Upload Record</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/physical-evaluation">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Physical Evaluation</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/mil-evaluation">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>MIL Evaluation</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/superbills">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Superbills</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/workstatus">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Work Status</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/treatment-plan">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Treatment Plan</div>
                    </a>
                  </Link>
                </li>

                <li className={`w-100`}>
                  <Link href="/doctor/bill-reduction">
                    <a className={`${frame34Styles.Navlink} px-0`}>
                      <div className={`d-sm-inline`}>Bill Reduction</div>
                    </a>
                  </Link>
                </li>
              </ul>
            </li>

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
