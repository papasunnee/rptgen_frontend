import mongoose from "mongoose";
import Patient from "./Patient";

/* SpecificAccidentSchema will correspond to a collection in your MongoDB database. */

const SpecificAccidentSchema = new mongoose.Schema(
  {
    body_parts: {
      type: String,
    },
    body_part_type: {
      type: String,
    },
    date_of_injury: {
      type: Date,
    },
    accident_description: {
      type: String,
    },
    treatment_history: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.SpecificAccident ||
  mongoose.model("SpecificAccident", SpecificAccidentSchema);
