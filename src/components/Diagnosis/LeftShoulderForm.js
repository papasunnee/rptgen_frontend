import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import diagnosisStyles from "./Diagnosis.module.scss";

const initialValues = {
  sudden_confusion: false,
};

function LeftShoulderForm() {
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
            <h4>Acromioclavicular Arthrosis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Acromioclavicular Dislocation</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Acromioclavicular Sprain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Adhesive Capsulitis (Frozen Shoulder Syndrome)</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Bicipital Tendinitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Dislocation</h4>

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
            <h4>Fracture: Clavicie</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Fracture: Proximal Humerus</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Impingement Syndrome (Anterior)</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Impingement Syndrome (Posterior)</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Instability</h4>

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
            <h4>Myofascial Pain Syndrome</h4>

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
            <h4>Rotator Cuff Tear</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Rotator Cuff Tendinitis</h4>

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
            <h4>Subacromial Bursitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Superior Labral Anterior Posterior Tear</h4>

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

export default LeftShoulderForm;
