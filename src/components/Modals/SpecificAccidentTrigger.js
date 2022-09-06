import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import frame44Styles from "../Frame44/Frame44.module.scss";

import BodypartTrigger from "./MedicalhistoryformModals/BodypartTrigger";
import BodypartTypeTrigger from "./SpecificAccidentFormModals/BodypartType";

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
          <h4>Add Specific Accident</h4>
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
          Add Specific Accident
        </Modal.Title>
      </Modal.Header>
      <form>
        <div style={{ minHeight: "22px" }}></div>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", width: "50%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Body Part:</label>
                <BodypartTrigger />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Date of Injury:</label>
                <input type="date" style={{ width: "75%" }} />
              </div>

              <div
                className={`${functionalStyles.Inputlist_con}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <label>Body Part Type</label>
                <BodypartTypeTrigger />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Description of</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ border: "3px solid transparent", width: "50%" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Treatment History</label>
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
          <button type="submit">Save</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
