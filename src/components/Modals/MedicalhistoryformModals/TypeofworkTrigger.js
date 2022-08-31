import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function TypeofworkTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          onClick={() => setModalShow(true)}
          readOnly
          required
          className="form-control"
          value={form.work_type}
          placeholder="Eg. your text here"
          name="work_type"
          style={{ width: "90%" }}
        />
      </div>

      <TypeofworkModal
        show={modalShow}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default TypeofworkTrigger;

function TypeofworkModal(props) {
  const { setForm } = props;
  const handleClick = (item) => {
    const hasClass = document
      .getElementById(item.name)
      .classList.contains("Functionalimprovement_activeSelection___SGsl");
    if (!hasClass) {
      WorkType.forEach((work) =>
        document
          .getElementById(work.name)
          .classList.remove("Functionalimprovement_activeSelection___SGsl")
      );
      document
        .getElementById(item.name)
        .classList.add("Functionalimprovement_activeSelection___SGsl");
      // setSelectedWork(item);
      setForm((prev) => ({ ...prev, work_type: item.name }));
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
          Select Type of Work
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {WorkType.map((item, index) => (
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

const WorkType = [
  { name: "Auto", active: "false" },
  { name: "Home", active: "false" },
  { name: "Sports", active: "false" },
  { name: "Work", active: "false" },
  { name: "Others", active: "false" },
];
