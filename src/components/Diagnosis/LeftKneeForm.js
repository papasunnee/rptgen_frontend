import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

import diagnosisStyles from "./Diagnosis.module.scss";

const initialValues = {
  value_a: false,
  value_b: false,
  value_c: false,
  value_d: false,
  value_e: false,
  value_f: false,
  value_g: false,
  value_h: false,
  value_i: false,
  value_j: false,
  value_k: false,
  value_l: false,
  value_m: false,
  value_n: false,
};

function LeftKneeForm() {
  const data = useContext(UserContext);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckChange = (label) => {
    setError(null);
    setForm((prev) => ({
      ...prev,
      [label]: !form[label],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form).every((item) => item == false);
    if (!isEmpty) {
      try {
        const response = await fetch("/api/doctor/diagnosis", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            patient_id: data._id,
            diagnose_type: "Left Knee",
          }),
        });
        const diagnosis = await response.json();
        if (diagnosis.success) {
          setSuccessMessage("Patient Diagnosis Successfully Updated");
          setForm(initialValues);
          setTimeout(() => setSuccessMessage(null), 5000);
        } else {
          throw new Error("Cannot Update Patient Diagnosis Data");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError("Please enable at least one field");
    }
    setLoading(false);
  };
  return (
    <form className={`${diagnosisStyles.Form}`} onSubmit={handleSubmit}>
      <div style={{ minHeight: "22px" }}>
        {error && <p className="bg-danger text-white p-2">{error}</p>}
        {successMessage && (
          <p className="bg-success text-white p-2">{successMessage}</p>
        )}
      </div>
      <div className={`${diagnosisStyles.Toprow}`}>
        <div className={`${diagnosisStyles.Cardcon}`}>
          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>ACL Insufficiency</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_a")}
              checked={form.value_a}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>ACL Tear</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_b")}
              checked={form.value_b}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Anterior Knee Pain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_c")}
              checked={form.value_c}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Chonromalacia Patella</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_d")}
              checked={form.value_d}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Internal Derangement</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_e")}
              checked={form.value_e}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Lateral Meniscus Tear</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_f")}
              checked={form.value_f}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Medial Meniscus Tear</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_g")}
              checked={form.value_g}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Medial/Lateral Meniscopathy</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_h")}
              checked={form.value_h}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Osteoarthritis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_i")}
              checked={form.value_i}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Patellar Bursitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_j")}
              checked={form.value_j}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Patellar Tendinitis</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_k")}
              checked={form.value_k}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Quadriceps Atrophy</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_l")}
              checked={form.value_l}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Sprain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_m")}
              checked={form.value_m}
            />
          </div>

          <div className={`${diagnosisStyles.Card} col-md-3`}>
            <h4>Strain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("value_n")}
              checked={form.value_n}
            />
          </div>
        </div>
      </div>

      <div className={`${diagnosisStyles.Button}`}>
        <button disabled={loading}>
          {loading ? "...Please wait" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default LeftKneeForm;
