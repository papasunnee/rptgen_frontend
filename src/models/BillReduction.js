import mongoose from "mongoose";
import Patient from "./Patient";

/* BillReductionSchema will correspond to a collection in your MongoDB database. */

const BillReductionSchema = new mongoose.Schema(
  {
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

export default mongoose.models.BillReduction ||
  mongoose.model("BillReduction", BillReductionSchema);
