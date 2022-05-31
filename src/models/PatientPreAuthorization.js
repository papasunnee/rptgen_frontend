import mongoose from "mongoose";

/* PatientPreAuthorizationSchema will correspond to a collection in your MongoDB database. */

const PatientPreAuthorizationSchema = new mongoose.Schema(
  {
    interpreter_name: {
      type: String,
    },
    interpreter_language: {
      type: String,
    },
    interpreter_certification: {
      type: String,
    },
    questionnaire_insurance: {
      type: String,
    },
    questionnaire_address: {
      type: String,
    },
    questionnaire_city_state_zip: {
      type: String,
    },
    questionnaire_claim_adjuster: {
      type: String,
    },
    questionnaire_claim_number: {
      type: String,
    },
    questionnaire_telephone: {
      type: String,
    },
    questionnaire_fax: {
      type: String,
    },
    wcab_name: {
      type: String,
    },
    wcab_address: {
      type: String,
    },
    wcab_city_state_zip: {
      type: String,
    },
    wcab_fax: {
      type: String,
    },
    wcab_telephone: {
      type: String,
    },
    wcab_eams_adjuster: {
      type: String,
    },
    employer_name: {
      type: String,
    },
    employer_address: {
      type: String,
    },
    employer_city_state_zip: {
      type: String,
    },
    employer_fax: {
      type: String,
    },
    employer_telephone: {
      type: String,
    },
    employer_eams_adjuster: {
      type: String,
    },
    first_attempt_date: {
      type: String,
    },
    first_attempt_time: {
      type: String,
    },
    first_attempt_contact_name: {
      type: String,
    },
    first_attempt_title_position: {
      type: String,
    },
    first_attempt_result: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PatientPreAuthorization ||
  mongoose.model("PatientPreAuthorization", PatientPreAuthorizationSchema);
