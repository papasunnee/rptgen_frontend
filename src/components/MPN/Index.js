import React, { Fragment, useState } from "react";
import Image from "next/image";

import Switch from "react-switch";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import descriptionStyles from "../Jobdescription/jobdescription.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import frame47Styles from "../Frame47/Frame47.module.scss";

import presentcomplainStyles from "../Present-Complaints/Complaints.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import PatientInfo from "../Patient-Demographics/PatientInfo";
import BodypartTrigger from "../Modals/MedicalhistoryformModals/BodypartTrigger";
import BodypartTypeTrigger from "../Modals/SpecificAccidentFormModals/BodypartType";
import SymptomsnoticedTrigger from "../Modals/CumulativeTraumaFormsModal/Symptomsnoticed";
import JobactivitiesTrigger from "../Modals/CumulativeTraumaFormsModal/JobActivities";

function MyVerticallyCenteredModal(props) {
    const [checked, setChecked] = useState(false);

    return (

        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${descriptionStyles.Modal} mpn-modal`}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className={`${descriptionStyles.Modal_title}`}
                >
                    Add MPN
                </Modal.Title>
            </Modal.Header>
            <form>
                <div style={{ minHeight: "22px" }}>
                </div>
                <Modal.Body>

                    <div style={{ marginBottom: "3%", marginTop: "-2%" }}>
                        <h3 style={{ fontSize: "20px" }}>MPN Questionnaire</h3>
                    </div>

                    <div className={`${descriptionStyles.Modal_body}`}>

                        <div className={`${descriptionStyles.Adl_col}`} style={{ width: "100%" }} >
                            <div className={`${descriptionStyles.Inputlist}`}>
                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>1&#41; Did you report your injury to your employer?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }

                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <label>2&#41; When did you report the injury?</label>
                                    <input
                                        type="date"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>

                                    <label>3&#41; To whom did you report the injury? &#40;Include his/her title. E.g. John Doe, Supervisor&#41;</label>

                                    <input
                                        type="text"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>Did your employer give you a claim form or fill out a claim for for you?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>

                                    <label>If yes, when?</label>
                                    <input
                                        type="date"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>Did your employer provide a doctor for you?:</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <label>How many days after you report your injury that a doctor was provided?</label>
                                    <input
                                        type="text"
                                        placeholder="19"
                                        name="dominant_hand"

                                    />

                                    <input
                                        type="text"
                                        placeholder="Days/week/months"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>Did the insurance company or your emploer provide a doctor whose office is 30 minutes or 15 miles from your home or work place? </label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={`${descriptionStyles.Adl_col}`} style={{ width: "100%" }} >
                            <div className={`${descriptionStyles.Inputlist}`}>
                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>9&#41; If you were taken to the emergency room, did your employer provide a doctor for you after you left the hospital?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }

                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <label>10&#41; How many days after you left the emergency room a doctor was provided for follow-up?</label>
                                    <input
                                        type="text"
                                        placeholder="Select No. of days"
                                        name="dominant_hand"

                                    />

                                    <input
                                        type="text"
                                        placeholder="Days/week/months"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>

                                    <label>11&#41; What did the doctor provide you for 30 minutes or 15 miles from your home or workplace?</label>

                                    <input
                                        type="text"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>12&#41; Did you have increased pain when driving more than 30 minutes or 15 miles from your home or workplace?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>13&#41; Did the doctor you were sent to ignore the body parts you have injured that is on your claim form? &#40;Indicate the body parts&#41;</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter body parts here"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>14&#41; Did the doctor prescribe treatment but was not given?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Enter body parts here"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>
                            </div>
                        </div>

                        <div className={`${descriptionStyles.Adl_col}`} style={{ width: "100%" }} >
                            <div className={`${descriptionStyles.Inputlist}`}>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <label>15&#41; What kind of treatment that was not given?</label>
                                    <input
                                        type="text"
                                        placeholder="Select kind of treatment that was not given?"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>16&#41; If the doctor you were sent to prescribed treatment, was it late?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="Comments"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }

                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <label>17&#41; If yes, how many days after you saw the doctor, the treatment begin?</label>
                                    <input
                                        type="text"
                                        placeholder="Select No. of days"
                                        name="dominant_hand"

                                    />

                                    <input
                                        type="text"
                                        placeholder="Days/week/months"
                                        name="dominant_hand"

                                    />
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>18&#41; Is the doctor's treatment effective?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="If NO please explain briefly"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>19&#41; Did the doctor you were sent to neglect or refuse to treat you?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                    {
                                        checked ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="If NO please explain briefly"
                                                    name="dominant_hand"

                                                />
                                            </div>
                                        ) : (<div></div>)
                                    }
                                </div>

                                <div className={`${descriptionStyles.Inputlist_con}`}>
                                    <div className={`${descriptionStyles.Label_checkbox_con}`} style={{ justifyContent: "space-between" }}>

                                        <label>20&#41; Did your employer post notices at your workplace in both English and Spanish, or English and Chinese, and other languages which informed you of your rights under the California's Workers Compensation Laws?</label>
                                        <Switch
                                            uncheckedIcon={false}
                                            checkedIcon={false}
                                            onChange={() => setChecked(!checked)}
                                            checked={checked} />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
                    <button type="submit">
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}

function Index() {
    const [modalShow, setModalShow] = React.useState(false);

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
                                            <h3>MPN</h3>

                                            <SearchPatient />
                                        </div>
                                    </div>

                                    <div className={`${frame44Styles.Toptabs} row col-md-10`}>
                                        <div className={`${frame47Styles.Toptabs_title}`} style={{ marginTop: "5%" }}>
                                            <h3 style={{ marginBottom: "5%" }}>Quick Tasks</h3>
                                        </div>

                                        <Button
                                            variant="primary"
                                            onClick={() => setModalShow(true)}
                                            className={`${frame44Styles.Tab} col-md-6`}
                                            style={{ width: "277px", background: "#fff", color: "#000" }}
                                        >
                                            <div className={`${frame44Styles.Image}`}>
                                                <Image src={appointmenticon} alt="icon-img" />
                                            </div>

                                            <div className={`${frame44Styles.Content}`}>
                                                <h4>Add MPN</h4>
                                            </div>
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>

                                    <div className={`${frame44Styles.Appointment_activity}`}>
                                        <div className={`${frame44Styles.Title}`}>
                                            <h3>MPN</h3>
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
