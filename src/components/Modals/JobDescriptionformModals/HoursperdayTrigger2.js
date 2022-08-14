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

function HoursperdayTrigger2() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={`${frame44Styles.Selectinput} col-md-3`}
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <input
                    type="text"
                    placeholder="Left Hand"
                    name="physical_activity"
                    style={{ width: "45%" }}
                />

                <input
                    type="text"
                    placeholder="Right Hand"
                    name="physical_activity"
                    style={{ width: "45%" }}
                />
            </Button>

            <HoursperdayModal2
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default HoursperdayTrigger2;

function HoursperdayModal2(props) {
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
                    Select Activity per Hour
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`}>

                    <div className={`${functionalStyles.Selectitems_con}`}>
                        <button className={`${functionalStyles.Selectitems}`}>
                            Never (0 hour)
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Occasionally (up to 3 hours)
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Frequently (3 to 6 hours)
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Constantly (6 to 8+ hours)
                        </button>
                    </div>

                </Modal.Body>
            </form>
        </Modal>
    );
}
