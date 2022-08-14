import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import TypeofworkTrigger from "./MedicalhistoryformModals/TypeofworkTrigger";
import BodypartTrigger from "./MedicalhistoryformModals/BodypartTrigger";
import TypeoftreatmentTrigger from "./MedicalhistoryformModals/TypeoftreatmentTrigger";

function SpecificAccidentTrigger() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={`${frame44Styles.Tab} col-md-3`}
                style={{ backgroundColor: "#fff", color: "#000" }}
            >
                <div className={`${frame44Styles.Image}`}>
                    <Image src={appointmenticon} alt="icon-img" />
                </div>

                <div className={`${frame44Styles.Content}`}>
                    <h4>Add Medical History</h4>
                </div>
            </Button>

            <SpecificAccidentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default SpecificAccidentTrigger;


function SpecificAccidentModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${functionalStyles.Modal}`}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className={`${functionalStyles.Modal_title}`}
                >
                    Add Medical History
                </Modal.Title>
            </Modal.Header>
            <form>
                <div style={{ minHeight: "22px" }}>
                </div>
                <Modal.Body className={`${functionalStyles.Modal_body}`}>
                    <div className={`${functionalStyles.Adl_col}`}>
                        <div className={`${functionalStyles.Inputlist}`}>
                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Type</label>
                                <TypeofworkTrigger />
                            </div>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Body Part</label>
                                <BodypartTrigger />
                                {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="body_part"
                  value={form.body_part}
                  onChange={handleChange}
                /> */}
                            </div>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Date of Injury</label>
                                <input
                                    type="date"
                                    placeholder="Eg. your text here"
                                    name="injury_date"
                                />
                            </div>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Type of Treatment</label>
                                <TypeoftreatmentTrigger />
                                {/* <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="treatment_type"
                  value={form.treatment_type}
                  onChange={handleChange}
                /> */}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${functionalStyles.Adl_col}`}
                        style={{ width: "370px" }}
                    >
                        <div className={`${functionalStyles.Inputlist}`}>
                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="fully_recovered"
                                        style={{ width: "20px" }}
                                    />{" "}
                                    Fully Recovered
                                </label>
                            </div>

                            <div className={`${functionalStyles.Inputlist_con}`}>
                                <label>Mechanism of Injury</label>
                                <textarea
                                    cols="20"
                                    rows="15"
                                    placeholder="Eg. your text here"
                                    name="injury_mechanism"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
                    <button type="submit">
                        Save
                    </button>
                </Modal.Footer>
            </form>
        </Modal>
    );
}
