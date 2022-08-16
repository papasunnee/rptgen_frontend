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

function JobactivitiesTrigger() {
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
                    placeholder="Kneeling, Lifting, Pulling"
                    name="physical_activity"
                />
            </Button>

            <JobactivitiesModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow={setModalShow}
            />
        </>
    );
}

export default JobactivitiesTrigger;

function JobactivitiesModal(props) {
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
                    Select Job Activities
                </Modal.Title>
            </Modal.Header>
            <form>
                <Modal.Body className={`${functionalStyles.Modal_con}`} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            Bending
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Climbing
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Grasping
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Kneeling
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Looking Up
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Pushing
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Stooping
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Twisting
                        </button>
                    </div>

                    <div className={`${functionalStyles.Selectitems_con} col-md-5`} >
                        <button className={`${functionalStyles.Selectitems}`}>
                            Carrying
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Crawling
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Gripping
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Lifting
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Pulling
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Squatting
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Turning
                        </button>

                        <button className={`${functionalStyles.Selectitems}`}>
                            Working on akward positions
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
