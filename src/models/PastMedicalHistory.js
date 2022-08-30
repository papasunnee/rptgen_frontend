import mongoose from "mongoose";
import Patient from "./Patient";

/* PastMedicalHistorySchema will correspond to a collection in your MongoDB database. */

const PastMedicalHistorySchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    body_parts: {
      type: String,
    },
    injury_date: {
      type: String,
    },
    treatment_types: {
      type: String,
    },
    injury_mechanism: {
      type: String,
    },
    fully_recovered: {
      type: Boolean,
      default: false,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.PastMedicalHistory ||
  mongoose.model("PastMedicalHistory", PastMedicalHistorySchema);
