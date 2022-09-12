import React, { useContext, useState } from "react";
import { UserContext } from "@/context/UserContext";
import presentcomplainStyles from "./Complaints.module.scss";

const initialValues = {
  comment: "",
};
function FormComp5({ formName = "General" }) {
  const data = useContext(UserContext);
  const [form, setForm] = useState(initialValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
      (item) => item === null || item === ""
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
        <div className={`${presentcomplainStyles.Paincard} col-md-12`}>
          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <h4 style={{ fontSize: "18px" }}>General Comments</h4>
            <textarea
              cols="30"
              rows="8"
              placeholder="Eg. your text here"
              value={form.comment}
              name="comment"
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

export default FormComp5;
