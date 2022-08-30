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

function TypeoftreatmentTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          onClick={() => setModalShow(true)}
          readOnly
          required
          placeholder="Eg. your text here"
          name="tretment_types"
          value={form.treatment_types.join()}
        />
      </div>

      <TypeoftreatmentModal
        show={modalShow}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default TypeoftreatmentTrigger;

function TypeoftreatmentModal(props) {
  const { setForm } = props;
  const [selectedTreatmentTypes, setSelectedTreatmentTypes] = useState([
    ...TreatmentTypes,
  ]);

  const handleClick = (item) => {
    const activeItem = selectedTreatmentTypes.find(
      (treatmentType) => treatmentType.name == item.name
    );

    const updateItem = { ...activeItem, isActive: !activeItem.isActive };
    const arrayCopy = [...selectedTreatmentTypes];
    arrayCopy.splice(activeItem.id, 1, updateItem);
    setSelectedTreatmentTypes([...arrayCopy]);
    const formData = [];
    arrayCopy.forEach((item) => {
      if (item.isActive) {
        return formData.push(item.name);
      }
    });
    setForm((prev) => ({
      ...prev,
      treatment_types: [...formData],
    }));
  };
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
          Select Type of Treatment
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {selectedTreatmentTypes.map((item, index) => (
              <div className="col-md-6">
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

const TreatmentTypes = [
  { id: 0, name: "Acupuncture", isActive: false },
  { id: 1, name: "Chiropractic Core", isActive: false },
  { id: 2, name: "Injections", isActive: false },
  { id: 3, name: "Medication", isActive: false },
  { id: 4, name: "Physical Therapy", isActive: false },
  { id: 5, name: "Surgery", isActive: false },
  { id: 6, name: "Other", isActive: false },
];
