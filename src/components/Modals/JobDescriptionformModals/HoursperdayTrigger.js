import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function HoursperdayTrigger({ form, setForm, field }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          name="physical_activity"
          type="text"
          className="form-control"
          placeholder="Eg. your text here"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={form[field]}
          onClick={() => setModalShow(true)}
          readOnly
        />
      </div>

      <HoursperdayModal
        show={modalShow}
        field={field}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default HoursperdayTrigger;

export function HoursperdayModal(props) {
  const { setForm, field } = props;
  const handleClick = (item) => {
    const hasClass = document
      .getElementById(item.name)
      .classList.contains("Functionalimprovement_activeSelection___SGsl");
    if (!hasClass) {
      OptionList.forEach((option) =>
        document
          .getElementById(option.name)
          .classList.remove("Functionalimprovement_activeSelection___SGsl")
      );
      document
        .getElementById(item.name)
        .classList.add("Functionalimprovement_activeSelection___SGsl");
      setForm((prev) => ({ ...prev, [field]: item.name }));
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
          Select Activity per Hour
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {OptionList.map((item, index) => (
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

const OptionList = [
  { name: "Never (0 hour)", active: "false" },
  { name: "Occasionally (up to 3 hours)", active: "false" },
  { name: "Frequently (3 to 6 hours)", active: "false" },
  { name: "Constantly (6 to 8+ hours)", active: "false" },
];
