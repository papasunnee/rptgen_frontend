import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import diagnosisStyles from "./Diagnosis.module.scss";

const initialValues = {
  sudden_confusion: false,
};

function LeftHipForm() {
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
            <h4>Contusion</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Fracture</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Giuteus Medius Tear</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Giuteus Medius Tendinosis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Greater Trochanteric Bursitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Groin Strain/Adductor Strain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Meralgia Paresthetica</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Osteoarthritis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Sacroilitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Sprain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Strain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Strain: Hamstring/Hip Flexor</h4>

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

export default LeftHipForm;
