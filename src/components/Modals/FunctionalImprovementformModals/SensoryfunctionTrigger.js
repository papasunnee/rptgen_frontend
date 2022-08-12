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

function SensoryfunctionTrigger() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={`${frame44Styles.Selectinput} col-md-3`}
            >

                <label>Phyisical Activity</label>
                <input
                    type="text"
                    placeholder="Eg. your text here"
                    name="physical_activity"
                />
            </Button>

            <SensoryfunctionModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default SensoryfunctionTrigger;

function SensoryfunctionModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${functionalStyles.Modal}`}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className={`${functionalStyles.Modal_title}`}
                >
                    Select Activity
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`}>

                    <div className={`${functionalStyles.Selectitems_con}`}>
                        <button className={`${functionalStyles.Selectitems}`}>
                            Climbing Stairs
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Reclining
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Standing
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Sitting
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Walking
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Others
                        </button>
                    </div>

                </Modal.Body>
            </form>
        </Modal>
    );
}
