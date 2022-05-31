import React, { useState } from "react";
import demographicsStyles from "./Demographics.module.scss";

const initialFormValues = {
  providers_code: "",
  assistant_providers_code: "",
  providers_code_2: "",
  insurance_company_name: "",
  insurance_address: "",
  insurance_city_state: "",
  insurance_claim_adjuster: "",
  insurance_claim_number: "",
  insurance_telephone: "",
  insurance_fax: "",
  account_rep_name: "",
  account_description: "",
  applicant_name: "",
  applicant_address: "",
  applicant_city_state: "",
  applicant_fax: "",
  applicant_telephone: "",
  defence_name: "",
  defence_address: "",
  defence_state_city: "",
  defence_fax: "",
  defence_phone: "",
  wcab_name: "",
  wcab_address: "",
  wcab_city_state: "",
  wcab_fax: "",
  wcab_phone: "",
  wcab_eams_adjuster: "",
  referring_physician_name: "",
  referring_physician_address: "",
  referring_physician_city_state: "",
  referring_physician_fax: "",
  referring_physician_phone: "",
  referring_physician_eams_adjuster: "",
  employer_name: "",
  employer_address: "",
  employer_city_state: "",
  employer_fax: "",
  employer_phone: "",
  employer_eams_adjuster: "",
  interpreter_name: "",
  interpreter_address: "",
  interpreter_city_state: "",
  interpreter_fax: "",
  interpreter_phone: "",
  interpreter_eams_adjuster: "",
};

function DemographicForm() {
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
      const response = await fetch("/api/patient/demographic", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setSuccessMessage("Patient Demographic Successfully Added");
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
        <h3>Header Information</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Provider Code</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="providers_code"
                value={form.providers_code}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Asst Provider Code</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="assistant_providers_code"
                value={form.assistant_providers_code}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Provider Code</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="providers_code_2"
                value={form.providers_code_2}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Insurance Information</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Insurance Company</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_company_name"
                value={form.insurance_company_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_address"
                value={form.insurance_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_city_state"
                value={form.insurance_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_claim_adjuster"
                value={form.insurance_claim_adjuster}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Claim Number</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_claim_number"
                value={form.insurance_claim_number}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_telephone"
                value={form.insurance_telephone}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="insurance_fax"
                value={form.insurance_fax}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Account Representative</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="account_rep_name"
                value={form.account_rep_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Description</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="account_description"
                value={form.account_description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Applicant Attorney</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="applicant_name"
                value={form.applicant_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="applicant_address"
                value={form.applicant_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="applicant_city_state"
                value={form.applicant_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="applicant_fax"
                value={form.applicant_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="applicant_telephone"
                value={form.applicant_telephone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Defence Attorney</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="defence_name"
                value={form.defence_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="defence_address"
                value={form.defence_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="defence_state_city"
                value={form.defence_state_city}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="defence_fax"
                value={form.defence_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="defence_phone"
                value={form.defence_phone}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_city_state"
                value={form.wcab_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="wcab_phone"
                value={form.wcab_phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
        <h3>Referring Physician</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_name"
                value={form.referring_physician_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_address"
                value={form.referring_physician_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_city_state"
                value={form.referring_physician_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_fax"
                value={form.referring_physician_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_phone"
                value={form.referring_physician_phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="referring_physician_eams_adjuster"
                value={form.referring_physician_eams_adjuster}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_city_state"
                value={form.employer_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="employer_phone"
                value={form.employer_phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
        <h3>Interpreter</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
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
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_address"
                value={form.interpreter_address}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_city_state"
                value={form.interpreter_city_state}
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
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_fax"
                value={form.interpreter_fax}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_phone"
                value={form.interpreter_phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                name="interpreter_eams_adjuster"
                value={form.interpreter_eams_adjuster}
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

export default DemographicForm;
