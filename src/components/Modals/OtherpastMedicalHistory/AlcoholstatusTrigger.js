import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function AlcoholstatusTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          onClick={() => setModalShow(true)}
          readOnly
          required
          value={form.alcohol}
          placeholder="Alcohol"
          name="alcohol"
          style={{ width: "70%" }}
        />
      </div>

      <AlcoholstatusModal
        show={modalShow}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default AlcoholstatusTrigger;

function AlcoholstatusModal(props) {
  const { setForm } = props;
  const handleClick = (item) => {
    const hasClass = document
      .getElementById(item.name)
      .classList.contains("Functionalimprovement_activeSelection___SGsl");
    if (!hasClass) {
      AlcoholStatus.forEach((alcohol) =>
        document
          .getElementById(alcohol.name)
          .classList.remove("Functionalimprovement_activeSelection___SGsl")
      );
      document
        .getElementById(item.name)
        .classList.add("Functionalimprovement_activeSelection___SGsl");
      // setSelectedWork(item);
      setForm((prev) => ({ ...prev, alcohol: item.name }));
    }
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
          Select Alcohol Status
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {AlcoholStatus.map((item, index) => (
              <div
                onClick={() => handleClick(item)}
                key={index}
                id={item.name}
                className={`${functionalStyles.Selectitems}`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
}

const AlcoholStatus = [
  { id: 0, name: "Does not drink", active: "false" },
  { id: 1, name: "Drinks everyday", active: "false" },
  { id: 2, name: "Drinks once or more each week", active: "false" },
  { id: 3, name: "Drinks once or more each month", active: "false" },
  { id: 4, name: "Drinks rarely", active: "false" },
];
