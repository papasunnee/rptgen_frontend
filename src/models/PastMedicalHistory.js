import mongoose from "mongoose";
import Patient from "./Patient";

/* PastMedicalHistorySchema will correspond to a collection in your MongoDB database. */

const PastMedicalHistorySchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    body_part: {
      type: String,
    },
    injury_date: {
      type: String,
    },
    treatment_type: {
      type: String,
    },
    injury_mechanism: {
      type: String,
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
