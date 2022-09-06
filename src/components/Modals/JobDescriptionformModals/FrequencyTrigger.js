import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function FrequencyTrigger({ form, setForm, field }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          placeholder="Tap to Select"
          name="physical_activity"
          className="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={form[field]}
          onClick={() => setModalShow(true)}
          readOnly
          style={{ width: "90%" }}
        />
      </div>

      <FrequencyModal
        show={modalShow}
        field={field}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default FrequencyTrigger;

function FrequencyModal(props) {
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
          Select frequency
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
  { name: "Never", active: "false" },
  { name: "Occasionally", active: "false" },
  { name: "Frequently", active: "false" },
  { name: "Constantly", active: "false" },
];
