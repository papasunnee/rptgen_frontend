import mongoose from "mongoose";
import Patient from "./Patient";

/* MPNSchema will correspond to a collection in your MongoDB database. */

const MPNSchema = new mongoose.Schema(
  {
    injury_report_to_employer_boolean: {
      type: Boolean,
      default: false,
    },
    injury_report_to_employer_text: {
      type: String,
    },
    injury_report_date: {
      type: String,
    },
    person_reported_to: {
      type: String,
    },
    filled_claim_form_boolean: {
      type: Boolean,
      default: false,
    },
    filled_claim_form_date: {
      type: String,
    },
    employer_provide_doctor_boolean: {
      type: Boolean,
      default: false,
    },
    days_doctor_provided: {
      type: String,
    },
    days_doctor_provided_b: {
      type: String,
    },
    provide_doctor_after_boolean: {
      type: Boolean,
      default: false,
    },
    provide_doctor_after_text: {
      type: String,
    },
    provide_doctor_closer_boolean: {
      type: Boolean,
      default: false,
    },
    provide_doctor_closer_text: {
      type: String,
    },
    days_emergency_doctor_provided: {
      type: String,
    },
    days_emergency_doctor_provided_b: {
      type: String,
    },
    things_doctor_provided: {
      type: String,
    },
    increased_pain_when_driving_home_boolean: {
      type: Boolean,
      default: false,
    },
    increased_pain_when_driving_home_text: {
      type: String,
    },
    doctor_ignore_body_on_claim_form_boolean: {
      type: Boolean,
      default: false,
    },
    doctor_ignore_body_on_claim_form_text: {
      type: String,
    },
    prescribed_treatment_not_given_boolean: {
      type: Boolean,
      default: false,
    },
    prescribed_treatment_not_given_text: {
      type: String,
    },
    type_of_treatment_not_given: {
      type: String,
    },
    prescribed_treatment_late_boolean: {
      type: Boolean,
      default: false,
    },
    prescribed_treatment_late_text: {
      type: String,
    },
    days_after_treatment_began: {
      type: String,
    },
    days_after_treatment_began_b: {
      type: String,
    },
    effective_treatment_boolean: {
      type: Boolean,
      default: false,
    },
    effective_treatment_text: {
      type: String,
    },
    dcotor_neglect_boolean: {
      type: Boolean,
      default: false,
    },
    dcotor_neglect_text: {
      type: String,
    },

    arthritis_b: {
      type: String,
    },

    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.MPN || mongoose.model("MPN", MPNSchema);
