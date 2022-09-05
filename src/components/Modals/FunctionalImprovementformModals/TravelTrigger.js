import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function TravelTrigger({ form, setForm }) {
  const [selectedOptions, setSelectedOptions] = useState([...OptionsList]);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          placeholder="Click and select travel"
          name="travel"
          className="form-control"
          value={form.travel}
          style={{ width: "90%" }}
          readOnly
          onClick={() => setModalShow(true)}
        />
      </div>

      <TravelModal
        show={modalShow}
        setForm={setForm}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default TravelTrigger;

function TravelModal(props) {
  const { selectedOptions, setSelectedOptions, setForm } = props;

  const handleClick = (item) => {
    const activeItem = selectedOptions.find(
      (bodyPart) => bodyPart.name == item.name
    );

    const updateItem = { ...activeItem, isActive: !activeItem.isActive };
    const arrayCopy = [...selectedOptions];
    arrayCopy.splice(activeItem.id, 1, updateItem);
    setSelectedOptions([...arrayCopy]);
    const formData = [];
    arrayCopy.forEach((item) => {
      if (item.isActive) {
        return formData.push(item.name);
      }
    });
    setForm((prev) => ({
      ...prev,
      travel: formData.join(),
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
          Select Activity
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {selectedOptions.map((item, index) => (
              <div className="col-md-12" key={index}>
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

const OptionsList = [
  { id: 0, name: "Driving", isActive: false },
  { id: 1, name: "Flying", isActive: false },
  { id: 2, name: "Riding", isActive: false },
  { id: 3, name: "Others", isActive: false },
];
