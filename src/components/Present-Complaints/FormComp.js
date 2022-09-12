import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { UserContext } from "@/context/UserContext";
import presentcomplainStyles from "./Complaints.module.scss";

const initialValues = {
  pain: false,
  swelling: false,
  radicular_pain: false,
  numbness: false,
  tingling: false,
  muscle_spasms: false,
  stiffness: false,
  decreased_rom: false,
  clicking: false,
  weakness: false,
  muscle_gurading: false,
  type: "",
  frequency: "",
  scale_of_pain_a: "",
  frequency_of_radicular_pain: "",
  radiating_to: "",
  numbness_frequency: "",
  muscle_spasm_frequency: "",
  decrease_range_frequency: "",
  stiffness_frequency: "",
  clicking_frequency: "",
  weakness_frequency: "",
  muscle_guarding_frequency: "",
  scale_of_pain_b: "",
  comment: "",
};
function FormComp({ formName = "Cervical Spine" }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
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
            form_number: "1",
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
        <div className={`${presentcomplainStyles.Paincard} col-md-3`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Pain</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("pain")}
              checked={form.pain}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Type</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="type"
              value={form.type}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Frequency</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Scale of Pain</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="scale_of_pain_a"
              value={form.scale_of_pain_a}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-3`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Swelling</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("swelling")}
              checked={form.swelling}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Radicular Pain</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("radicular_pain")}
              checked={form.radicular_pain}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the radicular pain?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="frequency_of_radicular_pain"
              value={form.frequency_of_radicular_pain}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Radiating to</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="radiating_to"
              value={form.radiating_to}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Numbness</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("numbness")}
              checked={form.numbness}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the numbness?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="numbness_frequency"
              value={form.numbness_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Tingling</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("tingling")}
              checked={form.tingling}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-3`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Muscle Spasms</h4>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("muscle_spasms")}
              checked={form.muscle_spasms}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the muscle spasm?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="muscle_spasm_frequency"
              value={form.muscle_spasm_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Stiffness</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("stiffness")}
              checked={form.stiffness}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the stiffness?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="stiffness_frequency"
              value={form.stiffness_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Decreased ROM</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("decreased_rom")}
              checked={form.decreased_rom}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>
              How often do you feel the decreased in range of motion?
            </label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="decrease_range_frequency"
              value={form.decrease_range_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Clicking</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("clicking")}
              checked={form.clicking}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the clicking?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="clicking_frequency"
              value={form.clicking_frequency}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-3`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <label>Weakness</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("weakness")}
              checked={form.weakness}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you feel the weakness?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="weakness_frequency"
              value={form.weakness_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Muscle Guarding</label>

            <Switch
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => handleCheckChange("muscle_gurading")}
              checked={form.muscle_gurading}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>How often do you experience muscle guarding?</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="muscle_guarding_frequency"
              value={form.muscle_guarding_frequency}
              onChange={handleChange}
            />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Scale of Pain</label>
            <input
              type="text"
              placeholder="Eg. your text here"
              name="scale_of_pain_b"
              value={form.scale_of_pain_b}
              onChange={handleChange}
            />
          </div>

          <div
            className={`${presentcomplainStyles.Inputgroup}`}
            style={{ display: "block" }}
          >
            <label>Comments</label> <br />
            <textarea
              cols="30"
              rows="8"
              placeholder="Eg. your text here"
              name="comment"
              value={form.comment}
              onChange={handleChange}
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

export default FormComp;
