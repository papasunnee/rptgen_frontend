import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import Switch from "react-switch";
import presentcomplainStyles from "./Complaints.module.scss";

const initialValues = {
  headaches: false,
  sudden_confusion: false,
  forget_recent_conversation: false,
  misplacing_items: false,
  poor_judgement: false,
  swallowing_problems: false,
  dizziness_or_vertigo: false,
  forgets_recent_events: false,
  language_problem: false,
  difficulty_in_reading: false,
  difficulty_in_writing: false,
  nausea: false,
};
function FormComp4({ formName = "Neuro" }) {
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
            form_number: "4",
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
        <div className={`${presentcomplainStyles.Paincard} col-md-6`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Headaches:</h4>
            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("headaches")}
              checked={form.headaches}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Sudden Confusion:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("sudden_confusion")}
              checked={form.sudden_confusion}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Forget recent conversation:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("forget_recent_conversation")}
              checked={form.forget_recent_conversation}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Misplacing Items:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("misplacing_items")}
              checked={form.misplacing_items}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Poor Judgement:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("poor_judgement")}
              checked={form.poor_judgement}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Swallowing problems:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("swallowing_problems")}
              checked={form.swallowing_problems}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Dizziness or vertigo:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("dizziness_or_vertigo")}
              checked={form.dizziness_or_vertigo}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-6`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Forgets recent events:</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("forgets_recent_events")}
              checked={form.forgets_recent_events}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Language Problem:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("language_problem")}
              checked={form.language_problem}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Difficulty in reading:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("difficulty_in_reading")}
              checked={form.difficulty_in_reading}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Difficulty in writing:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("difficulty_in_writing")}
              checked={form.difficulty_in_writing}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Nausea:</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("nausea")}
              checked={form.nausea}
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

export default FormComp4;
