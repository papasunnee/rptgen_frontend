import React, { useEffect, Fragment } from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";

import loginimg from "@/images/login.png";
import logoimg from "@/images/logo.png";
import useraccounticon from "@/images/useraccount-icon.png";

import optionselectStyles from "./Optionselect.module.scss";
import Link from "next/link";

function Optionselect() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Fragment>
      <div
        className={`${optionselectStyles.Optionselect} container-fluid row justify-content-around`}
        style={{ padding: 0 }}
      >
        <div
          className={`${optionselectStyles.Image} col-lg-7 col-md-4 d-lg-block d-none`}
        >
          <Image src={loginimg} alt="login-img" />
        </div>

        <div className={`${optionselectStyles.Formsection} col-lg-5 col-md-12`}>
          <div className={`${optionselectStyles.Title}`}>
            <h3>Options Select</h3>
          </div>

          <div
            className={`${optionselectStyles.Existingpatientstab} col-md-11`}
          >
            <div className={`${optionselectStyles.Tabtitle}`}>
              <h4>Look up information on
                existing patients in the database</h4>

              <Image src={useraccounticon} alt="useraccount-icon" />
            </div>

            <div className={`${optionselectStyles.Content}`}>
              <p>Look up information on existing patients in the database</p>
            </div>

            <div className={`${optionselectStyles.Button}`}>
              <Link href="existing-patients">
                <a>Next</a>
              </Link>
            </div>
          </div>

          <div
            className={`${optionselectStyles.Existingpatientstab} col-md-11`}
          >
            <div className={`${optionselectStyles.Tabtitle}`}>
              <h4>Create a new patient record in
                the database.</h4>

              <Image src={useraccounticon} alt="useraccount-icon" />
            </div>

            <div className={`${optionselectStyles.Content}`}>
              <p>Create a new patient record in the database.</p>
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

export default Optionselect;
