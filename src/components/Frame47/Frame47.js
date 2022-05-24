import React, { useState, Fragment } from "react";
import { useRouter } from "next/link";
import Image from "next/image";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import useLocalStorage from "use-local-storage";

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

import MoonIcon from "@/images/moon.png";
import SunIcon from "@/images/sun.png";

import frame44Styles from "../Frame44/Frame44.module.scss";

import frame47Styles from "./Frame47.module.scss";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useAuth } from "@/context/AuthContext";

const initialValues = {
  firstname: "",
  lastname: "",
  middlename: "",
  street_address: "",
  city_state_zip: "",
  home_phone: "",
  providers_code: "",
  assistant_providers_code: "",
  image_url: "",
  birth_date: "",
  chart_number: "",
  ssn: "",
  gender: "",
  marital_status: "",
};

function MyVerticallyCenteredModal(props) {
  // const { newPatient } = useAuth();
  const [patientData, setPatientData] = useState(initialValues);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPatientData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log({ error: error.message });
    }
    // const data = await newPatient({ ...patientData });
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Add Patient
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                Basic Information
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstname"
                  value={patientData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  name="lastname"
                  value={patientData.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient Middle Name</label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  name="middlename"
                  value={patientData.middlename}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Provider Code"
                  required
                  name="providers_code"
                  value={patientData.providers_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Asst Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Asst Provider Code"
                  name="assistant_providers_code"
                  value={patientData.assistant_providers_code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                &nbsp;
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Street Address</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  required
                  name="street_address"
                  value={patientData.street_address}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  City, State, and Zip (Place a comma “,” after the city)
                </label>
                <input
                  type="text"
                  placeholder="City, State, and Zip"
                  required
                  name="city_state_zip"
                  value={patientData.city_state_zip}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Home Phone</label>
                <input
                  type="text"
                  placeholder="Enter Home Phone"
                  required
                  name="home_phone"
                  value={patientData.home_phone}
                  onChange={handleChange}
                />
              </div>

              {/* <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Home Phone</label>
                <input type="text" placeholder="Enter Home Phone" />
              </div> */}

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Upload Patient Picture</label>
                <input
                  type="file"
                  placeholder="Browse File"
                  multiple={false}
                  accept="image/*"
                  name="image_url"
                />
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                Status
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Birth</label>
                <input
                  type="text"
                  placeholder="Select Birthdate"
                  required
                  name="birth_date"
                  value={patientData.birth_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Chart Number</label>
                <input
                  type="text"
                  placeholder="Enter Chart Number"
                  required
                  name="chart_number"
                  value={patientData.chart_number}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>SSN</label>
                <input
                  type="number"
                  placeholder="Enter SSN Number"
                  required
                  name="ssn"
                  value={patientData.ssn}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Select Gender</label>
                <input
                  type="text"
                  placeholder="Select Gender"
                  required
                  name="gender"
                  value={patientData.gender}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Marital Status</label>
                <input
                  type="text"
                  placeholder="Enter Marital Status"
                  required
                  name="marital_status"
                  value={patientData.marital_status}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          {/* <Button onClick={props.onHide}>Close</Button> */}

          <button type="submit">Save</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

function Frame47() {
  const [modalShow, setModalShow] = React.useState(true);

  const [theme, setTheme] = useLocalStorage("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalStyles />
        <div
          className={`${frame44Styles.Frame34} container-fluid overflow-hidden`}
        >
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
                        <h3>Patients Details</h3>

                        {/* <button
                          onClick={toggleTheme}
                          className={`${frame47Styles.Togglebutton}`}
                        >
                          <h1>
                            Switch to{" "}
                            {theme === "light" ? "dark mode" : "light mode"}!
                          </h1>
                        </button> */}

                        {/* <Toggle theme={theme} toggleTheme={toggleTheme} />
                                                <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1> */}

                        <div
                          className={`${frame47Styles.Inputgroup} input-group flex-nowrap`}
                        >
                          <div
                            className={`${frame47Styles.Inputgroup_text} input-group-text`}
                            id="addon-wrapping"
                          >
                            <BsSearch />
                          </div>
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

                    <div className={`${frame44Styles.Toptabs} row`}>
                      <div className={`${frame47Styles.Toptabs_title}`}>
                        <h3>Quick Tasks</h3>
                      </div>

                      {/* <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}

                      <div
                        className={`${frame44Styles.Tab} col-md-3`}
                        style={{ width: "300px" }}
                      >
                        <div className={`${frame44Styles.Image}`}>
                          <Image src={appointmenticon} alt="icon-img" />
                        </div>

                        <div className={`${frame44Styles.Content}`}>
                          <h4>Schedule Appointment</h4>
                        </div>
                      </div>

                      <div className={`${frame44Styles.Tab} col-md-3`}>
                        <div className={`${frame44Styles.Image}`}>
                          <Image src={newpatientsicon} alt="icon-img" />
                        </div>

                        <div className={`${frame44Styles.Content}`}>
                          <h4>Add Complaint</h4>
                        </div>
                      </div>

                      <div className={`${frame44Styles.Tab} col-md-3`}>
                        <div className={`${frame44Styles.Image}`}>
                          <Image src={appointmenticon} alt="icon-img" />
                        </div>

                        <div className={`${frame44Styles.Content}`}>
                          <h4>Operations</h4>
                        </div>
                      </div>
                    </div>

                    <div className={`${frame44Styles.Appointment_activity}`}>
                      <div className={`${frame44Styles.Title}`}>
                        <h3>Appointment Activity</h3>
                      </div>

                      <div
                        className={`${frame44Styles.Appointmentlist_section}`}
                      >
                        <div
                          className={`${frame44Styles.Appointmentlist_title}`}
                        >
                          <div className={`${frame44Styles.Name}`}>
                            <h4>Name</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Email</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Date</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Visit Time</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Doctor</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Conditions</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>&nbsp;</h4>
                          </div>
                        </div>

                        <div className={`${frame44Styles.Appointment}`}>
                          <div className={`${frame44Styles.Name}`}>
                            <div className={`${frame44Styles.Profilepic}`}>
                              <Image src={profilepic} alt="profile-pic" />
                            </div>

                            <h4>Lesile Alexander</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>lesie.alexander@example.com</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>10/10/2020</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>09:15-09:45am</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Dr. Jacob Jones</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Mumps Stage II</h4>
                          </div>

                          <div className={`${frame44Styles.Action_buttons}`}>
                            <Image src={editicon} alt="edit-icon" />
                            <Image src={deleteicon} alt="delete-icon" />
                          </div>
                        </div>

                        <div className={`${frame44Styles.Appointment}`}>
                          <div className={`${frame44Styles.Name}`}>
                            <div className={`${frame44Styles.Profilepic}`}>
                              <Image src={profilepic} alt="profile-pic" />
                            </div>

                            <h4>Lesile Alexander</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>lesie.alexander@example.com</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>10/10/2020</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>09:15-09:45am</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Dr. Jacob Jones</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Mumps Stage II</h4>
                          </div>

                          <div className={`${frame44Styles.Action_buttons}`}>
                            <Image src={editicon} alt="edit-icon" />
                            <Image src={deleteicon} alt="delete-icon" />
                          </div>
                        </div>

                        <div className={`${frame44Styles.Appointment}`}>
                          <div className={`${frame44Styles.Name}`}>
                            <div className={`${frame44Styles.Profilepic}`}>
                              <Image src={profilepic} alt="profile-pic" />
                            </div>

                            <h4>Lesile Alexander</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>lesie.alexander@example.com</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>10/10/2020</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>09:15-09:45am</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Dr. Jacob Jones</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Mumps Stage II</h4>
                          </div>

                          <div className={`${frame44Styles.Action_buttons}`}>
                            <Image src={editicon} alt="edit-icon" />
                            <Image src={deleteicon} alt="delete-icon" />
                          </div>
                        </div>

                        <div className={`${frame44Styles.Appointment}`}>
                          <div className={`${frame44Styles.Name}`}>
                            <div className={`${frame44Styles.Profilepic}`}>
                              <Image src={profilepic} alt="profile-pic" />
                            </div>

                            <h4>Lesile Alexander</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>lesie.alexander@example.com</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>10/10/2020</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>09:15-09:45am</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Dr. Jacob Jones</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Mumps Stage II</h4>
                          </div>

                          <div className={`${frame44Styles.Action_buttons}`}>
                            <Image src={editicon} alt="edit-icon" />
                            <Image src={deleteicon} alt="delete-icon" />
                          </div>
                        </div>

                        <div className={`${frame44Styles.Appointment}`}>
                          <div className={`${frame44Styles.Name}`}>
                            <div className={`${frame44Styles.Profilepic}`}>
                              <Image src={profilepic} alt="profile-pic" />
                            </div>

                            <h4>Lesile Alexander</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>lesie.alexander@example.com</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>10/10/2020</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>09:15-09:45am</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Dr. Jacob Jones</h4>
                          </div>

                          <div className={`${frame44Styles.Name}`}>
                            <h4>Mumps Stage II</h4>
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
    </ThemeProvider>
  );
}

export default Frame47;
