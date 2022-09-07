import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function JobactivitiesTrigger({ form, setForm }) {
  const [selectedOptions, setSelectedOptions] = useState([...OptionsList]);
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          placeholder="Click and select Job Activities"
          name="job_activities"
          className="form-control"
          value={form.job_activities}
          style={{ width: "90%" }}
          readOnly
          onClick={() => setModalShow(true)}
        />
      </div>

      <JobactivitiesModal
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

export default JobactivitiesTrigger;

function JobactivitiesModal(props) {
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
      job_activities: formData.join(),
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
          Select Job Activities
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con} row`}>
            {selectedOptions.map((item, index) => (
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

const OptionsList = [
  { id: 0, name: "Bending", isActive: false },
  { id: 1, name: "Climbing", isActive: false },
  { id: 2, name: "Grasping", isActive: false },
  { id: 3, name: "Kneeling", isActive: false },
  { id: 4, name: "Looking Up", isActive: false },
  { id: 5, name: "Pushing", isActive: false },
  { id: 6, name: "Stooping", isActive: false },
  { id: 7, name: "Carrying", isActive: false },
  { id: 8, name: "Crawling", isActive: false },
  { id: 9, name: "Gripping", isActive: false },
  { id: 10, name: "Lifting", isActive: false },
  { id: 11, name: "Pulling", isActive: false },
  { id: 12, name: "Squatting", isActive: false },
  { id: 13, name: "Turning", isActive: false },
  { id: 14, name: "Working on akward positions", isActive: false },
  { id: 15, name: "Other", isActive: false },
];
