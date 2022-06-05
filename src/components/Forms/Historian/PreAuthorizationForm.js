import React, { useState } from "react";

import demographicsStyles from "../../Patient-Demographics/Demographics.module.scss";

const initialFormValues = {
  interpreter_name: "",
  interpreter_language: "",
  interpreter_certification: "",
  questionnaire_insurance: "",
  questionnaire_address: "",
  questionnaire_city_state_zip: "",
  questionnaire_claim_adjuster: "",
  questionnaire_claim_number: "",
  questionnaire_telephone: "",
  questionnaire_fax: "",
  wcab_name: "",
  wcab_address: "",
  wcab_city_state_zip: "",
  wcab_fax: "",
  wcab_telephone: "",
  wcab_eams_adjuster: "",
  employer_name: "",
  employer_address: "",
  employer_city_state_zip: "",
  employer_fax: "",
  employer_telephone: "",
  employer_eams_adjuster: "",
  first_attempt_date: "",
  first_attempt_time: "",
  first_attempt_contact_name: "",
  first_attempt_title_position: "",
  first_attempt_result: "",
};
function PreAuthorizationForm() {
  const [form, setForm] = useState(initialFormValues);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSuccessMessage(null);
    const { name, value } = e.target;

    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/patient/preauthorization", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setSuccessMessage("Patient PreAuthorization Successfully Added");
        setForm(initialFormValues);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
  };
  return (
    <form className={`${demographicsStyles.Form}`} onSubmit={handleSubmit}>
      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Interpreter</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_name"
                value={form.interpreter_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Language</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_language"
                value={form.interpreter_language}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Certification</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_certification"
                value={form.interpreter_certification}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Pre-Authorization Questionaire</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Insurance Company</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_insurance"
                value={form.questionnaire_insurance}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_address"
                value={form.questionnaire_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_city_state_zip"
                value={form.questionnaire_city_state_zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Claim Adjuster</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_claim_adjuster"
                value={form.questionnaire_claim_adjuster}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Claim Number</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_claim_number"
                value={form.questionnaire_claim_number}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_telephone"
                value={form.questionnaire_telephone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="questionnaire_fax"
                value={form.questionnaire_fax}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>WCAB</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_name"
                value={form.wcab_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_address"
                value={form.wcab_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_city_state_zip"
                value={form.wcab_city_state_zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_fax"
                value={form.wcab_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_telephone"
                value={form.wcab_telephone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_eams_adjuster"
                value={form.wcab_eams_adjuster}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Employer</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_name"
                value={form.employer_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_address"
                value={form.employer_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_city_state_zip"
                value={form.employer_city_state_zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_fax"
                value={form.employer_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_telephone"
                value={form.employer_telephone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_eams_adjuster"
                value={form.employer_eams_adjuster}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>First Contact Attempt</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Date</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="first_attempt_date"
                value={form.first_attempt_date}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Time</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="first_attempt_time"
                value={form.first_attempt_time}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Contact Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="first_attempt_contact_name"
                value={form.first_attempt_contact_name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Title Position</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="first_attempt_title_position"
                value={form.first_attempt_title_position}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Result</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >

              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="first_attempt_result"
                value={form.first_attempt_result}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <p>{successMessage}</p>
      <div className={`${demographicsStyles.Button}`}>
        <button disabled={loading}>
          {loading ? "...Please wait" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default PreAuthorizationForm;
