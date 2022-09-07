import mongoose from "mongoose";
import Patient from "./Patient";

/* CumulativeTraumaSchema will correspond to a collection in your MongoDB database. */

const CumulativeTraumaSchema = new mongoose.Schema(
  {
    body_parts: {
      type: String,
    },
    job_activities: {
      type: String,
    },
    body_part_type: {
      type: String,
    },
    symptom_noticed: {
      type: String,
    },
    date_of_injury: {
      type: String,
    },
    pain_sitting: {
      type: String,
    },
    pain_walking: {
      type: String,
    },
    pain_standing: {
      type: String,
    },
    accident_description: {
      type: String,
    },
    treatment_history: {
      type: String,
    },
    difficult_activity: {
      type: String,
    },
    work_overtime: {
      type: Boolean,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.CumulativeTrauma ||
  mongoose.model("CumulativeTrauma", CumulativeTraumaSchema);
