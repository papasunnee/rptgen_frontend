import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";

function BodypartTrigger() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={`${frame44Styles.Selectinput} col-md-3`}
            >
                <input
                    type="text"
                    placeholder="Eg. your text here"
                    name="physical_activity"
                    style={{ width: "90%" }}
                />
            </Button>

            <BodypartModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default BodypartTrigger;

function BodypartModal(props) {
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
                    Select Body Part
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            Cervical Spine
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Thoracic Spine
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Shoulder
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Shoulder
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Elbow
                        </button>
                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Elbow
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Wrist
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Wrist
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Hand
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Hand
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Other
                        </button>
                    </div>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            Lumbar Spine
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Hip
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Hip
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Knee
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Hip
                        </button>
                        <button className={`${functionalStyles.Selectitems}`}>
                            Right Foot/Ankle
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Left Foot/Ankle
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Internal
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Neuro
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Psyche Questionaire
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            General Comment
                        </button>
                    </div>

                </Modal.Body>
            </form>
        </Modal>
    );
}
