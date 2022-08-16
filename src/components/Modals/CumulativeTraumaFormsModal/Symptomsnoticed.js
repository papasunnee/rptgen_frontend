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

function SymptomsnoticedTrigger() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button
                variant="primary"
                onClick={() => setModalShow(true)}
                className={`${frame44Styles.Selectinput} col-md-3`}
                style={{ width: "75%" }}
            >
                <input
                    type="text"
                    placeholder="Pain, Weakness"
                    name="physical_activity"
                />
            </Button>

            <SymptomsnoticedModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default SymptomsnoticedTrigger;

function SymptomsnoticedModal(props) {
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
                    Select Symptoms Noticed
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            None
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Pain
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Weakness
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Tingling
                        </button>
                    </div>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            Muscle Spasms
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Stiffness
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Numbness
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Other
                        </button>
                    </div>

                </Modal.Body>
            </form>
        </Modal>
    );
}
