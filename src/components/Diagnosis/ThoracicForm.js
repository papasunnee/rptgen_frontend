import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import diagnosisStyles from "./Diagnosis.module.scss";

const initialValues = {
  sudden_confusion: false,
};

function ThoracicForm() {
  const [modalShow, setModalShow] = useState(false);
  const data = useContext(UserContext);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckChange = (label) => {
    setForm((prev) => ({
      ...prev,
      [label]: !form[label],
    }));
  };
  return (
    <form className={`${diagnosisStyles.Form}`}>
      <div className={`${diagnosisStyles.Toprow}`}>
        <div className={`${diagnosisStyles.Cardcon}`}>
          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Musculoligamentous Injury with Discopathy</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Musculoligamentous Injury without Discopathy</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Myalgia</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Myositis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Radiculitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>
              Spondylosis <br /> without Myelopathy/ <br />
              Radiculopathy
            </h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Sprain and Strain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>
        </div>
      </div>

      <div className={`${diagnosisStyles.Button}`}>
        <button>Save</button>
      </div>
    </form>
  );
}

export default ThoracicForm;
