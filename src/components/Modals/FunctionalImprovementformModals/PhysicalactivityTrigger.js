import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function PhysicalactivityTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <label>Phyisical Activity</label>
        <input
          type="text"
          placeholder="Click and select physical activity"
          name="physical_activity"
          className="form-control"
          value={form.physical_activity}
          style={{ width: "90%" }}
          readOnly
          onClick={() => setModalShow(true)}
        />
      </div>

      <PhysicalactivityModal
        show={modalShow}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default PhysicalactivityTrigger;

function PhysicalactivityModal(props) {
  const { setForm } = props;
  const handleClick = (item) => {
    const hasClass = document
      .getElementById(item.name)
      .classList.contains("Functionalimprovement_activeSelection___SGsl");
    if (!hasClass) {
      PhysicalActivities.forEach((physicalActivity) =>
        document
          .getElementById(physicalActivity.name)
          .classList.remove("Functionalimprovement_activeSelection___SGsl")
      );
      document
        .getElementById(item.name)
        .classList.add("Functionalimprovement_activeSelection___SGsl");
      // setSelectedWork(item);
      setForm((prev) => ({ ...prev, physical_activity: item.name }));
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
          Select Activity
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {PhysicalActivities.map((item, index) => (
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

const PhysicalActivities = [
  { name: "Climbing Stairs", active: "false" },
  { name: "Reclining", active: "false" },
  { name: "Standing", active: "false" },
  { name: "Sitting", active: "false" },
  { name: "Walking", active: "false" },
  { name: "Others", active: "false" },
];
