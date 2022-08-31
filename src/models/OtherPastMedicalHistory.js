import mongoose from "mongoose";
import Patient from "./Patient";

/* OtherPastMedicalHistorySchema will correspond to a collection in your MongoDB database. */

const OtherPastMedicalHistorySchema = new mongoose.Schema(
  {
    marital_status: {
      type: String,
    },
    living_status: {
      type: String,
    },
    children_no: {
      type: String,
    },
    comments: {
      type: String,
    },
    smoking: {
      type: String,
    },
    cigarettes_per_day: {
      type: String,
    },
    alcohol: {
      type: String,
    },
    hospitalization_desc: {
      type: String,
    },
    past_surgeries_desc: {
      type: String,
    },
    current_medication_desc: {
      type: String,
    },
    hypertension: {
      type: String,
    },
    heart_disease: {
      type: String,
    },
    stroke: {
      type: String,
    },
    diabetes: {
      type: String,
    },
    asthma: {
      type: String,
    },
    emphysema: {
      type: String,
    },
    peptics_ulcers: {
      type: String,
    },
    kidney_disease: {
      type: String,
    },
    hepatitis: {
      type: String,
    },
    thyroid: {
      type: String,
    },
    tumors_cancer: {
      type: String,
    },
    arthritis: {
      type: String,
    },
    osteoporosis: {
      type: String,
    },
    high_cholesterol_and_triglyceride: {
      type: String,
    },
    hypertension_b: {
      type: String,
    },
    heart_disease_b: {
      type: String,
    },
    stroke_b: {
      type: String,
    },
    diabetes_b: {
      type: String,
    },
    asthma_b: {
      type: String,
    },
    emphysema_b: {
      type: String,
    },
    peptics_ulcers_b: {
      type: String,
    },
    kidney_disease_b: {
      type: String,
    },
    hepatitis_b: {
      type: String,
    },
    thyroid_b: {
      type: String,
    },
    tumors_cancer_b: {
      type: String,
    },
    arthritis_b: {
      type: String,
    },
    high_cholesterol_and_triglyceride_b: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.OtherPastMedicalHistory ||
  mongoose.model("OtherPastMedicalHistory", OtherPastMedicalHistorySchema);
