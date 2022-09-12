import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import Switch from "react-switch";
import presentcomplainStyles from "./Complaints.module.scss";

const initialValues = {
  abdominal_pain: false,
  chest_pain: false,
  irregular_heartbeats: false,
  diarrhea: false,
  upset_stomach: false,
  abdominal_bloating: false,
  abdominal_gas: false,
  shortness_of_breath: false,
  hypertension: false,
  waking_up_frequently_at_night: false,
  palpitations: false,
  sexual_problems: false,
  trouble_falling_asleep: false,
  diabetes: false,
  excessive_pain: false,
};
function FormComp3({ formName = "Internal" }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    const isEmpty = Object.values(form).every(
      (item) => item === null || item === "" || item == false
    );
    if (!isEmpty) {
      try {
        const response = await fetch("/api/patient/presentcomplaint", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            patient_id: data._id,
            form_number: "3",
            complaint_name: formName,
          }),
        });
        const presentComplaint = await response.json();
        if (presentComplaint.success) {
          setSuccessMessage("Patient Present Complaint Successfully Updated");
          setForm(initialValues);
          setTimeout(() => setSuccessMessage(null), 5000);
        } else {
          throw new Error("Cannot Update Present Complaint Data");
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setError("Please Fill at least one field");
    }
    setLoading(false);
  };
  return (
    <form
      className={`${presentcomplainStyles.Form}`}
      onSubmit={handleSubmit}
      name={formName}
    >
      <div className={`${presentcomplainStyles.Toprow}`}>
        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Abdominal Pain:</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("abdominal_pain")}
              checked={form.abdominal_pain}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Diarrhea:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("diarrhea")}
              checked={form.diarrhea}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Upset Stomach:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("upset_stomach")}
              checked={form.upset_stomach}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Abdominal Bloating:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("abdominal_bloating")}
              checked={form.abdominal_bloating}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Abdominal Gas:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("abdominal_gas")}
              checked={form.abdominal_gas}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Chest Pain:</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("chest_pain")}
              checked={form.chest_pain}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Shortness of Breath:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("shortness_of_breath")}
              checked={form.shortness_of_breath}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Hypertension:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("hypertension")}
              checked={form.hypertension}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Waking up frequently during the night:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() =>
                handleCheckChange("waking_up_frequently_at_night")
              }
              checked={form.waking_up_frequently_at_night}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Palpitations:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("palpitations")}
              checked={form.palpitations}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Irregular Heartbeats:</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("irregular_heartbeats")}
              checked={form.irregular_heartbeats}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Sexual Problems:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sexual_problems")}
              checked={form.sexual_problems}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Trouble Falling Asleep:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("trouble_falling_asleep")}
              checked={form.trouble_falling_asleep}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Diabetes:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("diabetes")}
              checked={form.diabetes}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Excessive Pain:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("excessive_pain")}
              checked={form.excessive_pain}
            />
          </div>
        </div>
      </div>

      <div className={`${presentcomplainStyles.Button}`}>
        <button disabled={loading}>
          {loading ? "...Please wait" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default FormComp3;
