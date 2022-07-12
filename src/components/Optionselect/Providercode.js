import React, { useEffect, useState, Fragment } from "react";
import Image from "next/image";

// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

import loginimg from "@/images/login.png";
import logoimg from "@/images/logo.png";
import useraccounticon from "@/images/useraccount-icon.png";

import optionselectStyles from "./Optionselect.module.scss";
import Link from "next/link";

import AddPatientModal from "../Patients-Database/addPatientModal";

import ProvidercodeModal from "../Optionselect/ProvidercodeModal";

function Providercode() {
    const [modalShow, setModalShow] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <Fragment>
            <div
                className={`${optionselectStyles.Optionselect} container-fluid row justify-content-around`}
                style={{ padding: 0 }}
            >

                <ProvidercodeModal show={modalShow} onHide={() => setModalShow(false)} />

                <div
                    className={`${optionselectStyles.Image} col-lg-7 col-md-4 d-lg-block d-none`}
                >
                    {/* <Image src={loginimg} alt="login-img" className={`${optionselectStyles.Goat}`} /> */}
                </div>

                <div className={`${optionselectStyles.Formsection} col-lg-5 col-md-12`}>
                    <div className={`${optionselectStyles.Title}`}>
                        <h3>Options Select</h3>
                    </div>

                    <div
                        className={`${optionselectStyles.Existingpatientstab} col-md-11`}
                    >
                        <div className={`${optionselectStyles.Tabtitle}`}>
                            <h4><strong>Existing Patients</strong></h4>

                            <Image src={useraccounticon} alt="useraccount-icon" />
                        </div>

                        <div className={`${optionselectStyles.Content}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>

                        <div className={`${optionselectStyles.Button}`}>
                            <Link href="/patient/database">
                                <a>Next</a>
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`${optionselectStyles.Existingpatientstab} col-md-11`}
                    >
                        <div className={`${optionselectStyles.Tabtitle}`}>
                            <h4><strong>New Patient</strong></h4>

                            <Image src={useraccounticon} alt="useraccount-icon" />
                        </div>

                        <div className={`${optionselectStyles.Content}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>

                        <div className={`${optionselectStyles.Button}`}>
                            <Link href="/new-patient">
                                <a>Start</a>
                            </Link>
                        </div>
                    </div>

                    <div className={`${optionselectStyles.Copyright}`}>
                        <p>RPTGen All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Providercode;
