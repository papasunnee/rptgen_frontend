import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import frame44Styles from "../../Frame44/Frame44.module.scss";
import functionalStyles from "../../Functionalimprovement/Functionalimprovement.module.scss";

function PreAuthLetterTrigger({ form, setForm }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className={`${frame44Styles.Selectinput} col-md-3`}>
        <input
          type="text"
          className="form-control"
          placeholder="Eg. your text here"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="pre_auth_letter"
          value={form.pre_auth_letter}
          onClick={() => setModalShow(true)}
          readOnly
        />

        {/* <input
          type="text"
          onClick={() => setModalShow(true)}
          readOnly
          required
          className="form-control"
          value={form.work_type}
          placeholder="Eg. your text here"
          name="work_type"
          style={{ width: "90%" }}
        /> */}
      </div>

      <PreAuthLetterModal
        show={modalShow}
        setForm={setForm}
        onHide={() => setModalShow(false)}
        setModalShow={setModalShow}
      />
    </>
  );
}

export default PreAuthLetterTrigger;

function PreAuthLetterModal(props) {
  const { setForm } = props;
  const handleClick = (item) => {
    const hasClass = document
      .getElementById(item.name)
      .classList.contains("Functionalimprovement_activeSelection___SGsl");
    if (!hasClass) {
      PreAuthLetterType.forEach((preAuthLetter) =>
        document
          .getElementById(preAuthLetter.name)
          .classList.remove("Functionalimprovement_activeSelection___SGsl")
      );
      document
        .getElementById(item.name)
        .classList.add("Functionalimprovement_activeSelection___SGsl");
      // setSelectedWork(item);
      setForm((prev) => ({ ...prev, pre_auth_letter: item.name }));
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
          Select Option
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body className={`${functionalStyles.Modal_con}`}>
          <div className={`${functionalStyles.Selectitems_con}`}>
            {PreAuthLetterType.map((item, index) => (
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

const PreAuthLetterType = [
  { name: "Fax to Employer/Insurance", active: "false" },
  { name: "Fax to US Email", active: "false" },
  { name: "Fax to US Certified Mail", active: "false" },
];
