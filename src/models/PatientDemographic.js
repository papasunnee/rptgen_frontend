import mongoose from "mongoose";

/* PatientDemographicSchema will correspond to a collection in your MongoDB database. */

const PatientDemographicSchema = new mongoose.Schema(
  {
    providers_code: {
      type: String,
    },
    assistant_providers_code: {
      type: String,
    },
    providers_code_2: {
      type: String,
    },
    insurance_company_name: {
      type: String,
    },
    insurance_address: {
      type: String,
    },
    insurance_city_state: {
      type: String,
    },
    insurance_claim_adjuster: {
      type: String,
    },
    insurance_claim_number: {
      type: String,
    },
    insurance_telephone: {
      type: String,
    },
    insurance_fax: {
      type: String,
    },
    account_rep_name: {
      type: String,
    },
    account_description: {
      type: String,
    },
    applicant_name: {
      type: String,
    },
    applicant_address: {
      type: String,
    },
    applicant_city_state: {
      type: String,
    },
    applicant_fax: {
      type: String,
    },
    applicant_telephone: {
      type: String,
    },
    defence_name: {
      type: String,
    },
    defence_address: {
      type: String,
    },
    defence_state_city: {
      type: String,
    },
    defence_fax: {
      type: String,
    },
    defence_phone: {
      type: String,
    },
    wcab_name: {
      type: String,
    },
    wcab_address: {
      type: String,
    },
    wcab_city_state: {
      type: String,
    },
    wcab_fax: {
      type: String,
    },
    wcab_phone: {
      type: String,
    },
    wcab_eams_adjuster: {
      type: String,
    },
    referring_physician_name: {
      type: String,
    },
    referring_physician_address: {
      type: String,
    },
    referring_physician_city_state: {
      type: String,
    },
    referring_physician_fax: {
      type: String,
    },
    referring_physician_phone: {
      type: String,
    },
    referring_physician_eams_adjuster: {
      type: String,
    },
    employer_name: {
      type: String,
    },
    employer_address: {
      type: String,
    },
    employer_city_state: {
      type: String,
    },
    employer_fax: {
      type: String,
    },
    employer_phone: {
      type: String,
    },
    employer_eams_adjuster: {
      type: String,
    },
    interpreter_name: {
      type: String,
    },
    interpreter_address: {
      type: String,
    },
    interpreter_city_state: {
      type: String,
    },
    interpreter_fax: {
      type: String,
    },
    interpreter_phone: {
      type: String,
    },
    interpreter_eams_adjuster: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PatientDemographic ||
  mongoose.model("PatientDemographic", PatientDemographicSchema);
