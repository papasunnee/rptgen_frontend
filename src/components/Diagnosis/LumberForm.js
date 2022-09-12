import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import diagnosisStyles from "./Diagnosis.module.scss";

const initialValues = {
  sudden_confusion: false,
};

function LumberForm() {
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
            <h4>Discogenic Low Back Pain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Facet Arthrosis/Syndrome</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Failed Back Syndrome (Post-Laminectomy Syndrome)</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Herniated Nucleus Pulposis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

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
            <h4>Neural Foraminal with Stenosis</h4>

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
            <h4>Sciatica</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Spondylolisthesis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Spondylosis</h4>

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

export default LumberForm;
