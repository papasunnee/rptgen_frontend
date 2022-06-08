import mongoose from "mongoose";
import Patient from "./Patient";

/* JobDescriptionSchema will correspond to a collection in your MongoDB database. */

const JobDescriptionSchema = new mongoose.Schema(
  {
    dominant_hand: {
      type: String,
    },
    job_type: {
      type: String,
    },
    employee_name: {
      type: String,
    },
    site_address: {
      type: String,
    },
    job_title: {
      type: String,
    },
    wages: {
      type: String,
    },
    hours_worked: {
      type: String,
    },
    days_worked: {
      type: String,
    },
    starting_date: {
      type: String,
    },
    last_working_date: {
      type: String,
    },
    reason: {
      type: String,
    },
    description: {
      type: String,
    },
    employment_status: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobDescription ||
  mongoose.model("JobDescription", JobDescriptionSchema);
