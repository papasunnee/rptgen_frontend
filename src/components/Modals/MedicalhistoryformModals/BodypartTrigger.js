import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function BodypartTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = useState([...BodyParts]);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          onClick={() => setModalShow(true)}
          readOnly
          required
          value={form.body_parts.join()}
          className="form-control"
          placeholder="Eg. your text here"
          name="body_parts"
          style={{ width: "90%" }}
        />
      </div>

      <BodypartModal
        show={modalShow}
        setForm={setForm}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default BodypartTrigger;

function BodypartModal(props) {
  const { selectedBodyPart, setSelectedBodyPart, setForm } = props;

  const handleClick = (item) => {
    const activeItem = selectedBodyPart.find(
      (bodyPart) => bodyPart.name == item.name
    );

    const updateItem = { ...activeItem, isActive: !activeItem.isActive };
    const arrayCopy = [...selectedBodyPart];
    arrayCopy.splice(activeItem.id, 1, updateItem);
    setSelectedBodyPart([...arrayCopy]);
    const formData = [];
    arrayCopy.forEach((item) => {
      if (item.isActive) {
        return formData.push(item.name);
      }
    });
    setForm((prev) => ({
      ...prev,
      body_parts: [...formData],
    }));
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
          Select Body Part
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`row ${functionalStyles.Selectitems_con}`}>
            {selectedBodyPart.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div
                  onClick={() => handleClick(item)}
                  key={index}
                  id={item.name}
                  className={`${functionalStyles.Selectitems} ${
                    item.isActive ? functionalStyles.activeSelection : ""
                  }`}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}

const BodyParts = [
  { id: 0, name: "Cervical Spine", isActive: false },
  { id: 1, name: "Thoracic Spine", isActive: false },
  { id: 2, name: "Right Shoulder", isActive: false },
  { id: 3, name: "Left Shoulder", isActive: false },
  { id: 4, name: "Right Elbow", isActive: false },
  { id: 5, name: "Left Elbow", isActive: false },
  { id: 6, name: "Right Wrist", isActive: false },
  { id: 7, name: "Left Wrist", isActive: false },
  { id: 8, name: "Right Hand", isActive: false },
  { id: 9, name: "Left Hand", isActive: false },
  { id: 10, name: "Other", isActive: false },
  { id: 11, name: "Lumbar Spine", isActive: false },
  { id: 12, name: "Right Hip", isActive: false },
  { id: 13, name: "Left Hip", isActive: false },
  { id: 14, name: "Right Knee", isActive: false },
  { id: 14, name: "Left Knee", isActive: false },
  { id: 16, name: "Right Foot/Ankle", isActive: false },
  { id: 17, name: "Left Foot/Ankle", isActive: false },
  { id: 18, name: "Internal", isActive: false },
  { id: 19, name: "Neuro", isActive: false },
  { id: 20, name: "Psyche Questionaire", isActive: false },
  { id: 21, name: "General Comment", isActive: false },
];
