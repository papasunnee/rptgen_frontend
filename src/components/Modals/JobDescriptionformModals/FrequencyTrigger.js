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

function FrequencyTrigger() {
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
                    placeholder="Tap to Select"
                    name="physical_activity"
                    style={{ width: "90%" }}
                />
            </Button>

            <FrequencyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default FrequencyTrigger;

function FrequencyModal(props) {
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
                    Select frequency
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`}>

                    <div className={`${functionalStyles.Selectitems_con}`}>
                        <button className={`${functionalStyles.Selectitems}`}>
                            Never
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Occasionally
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Frequently
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Constantly
                        </button>
                    </div>

                </Modal.Body>
            </form>
        </Modal>
    );
}