import mongoose from "mongoose";
import Patient from "./Patient";

/* FunctionalImprovementSchema will correspond to a collection in your MongoDB database. */

const FunctionalImprovementSchema = new mongoose.Schema(
  {
    providers_code: {
      type: String,
    },
    physical_activity: {
      type: String,
    },
    sensory_function: {
      type: String,
    },
    non_specialized_hand: {
      type: String,
    },
    travel: {
      type: String,
    },
    sexual_function: {
      type: String,
    },
    sleep: {
      type: String,
    },
    self_care: {
      type: String,
    },
    communication: {
      type: String,
    },
    description: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.FunctionalImprovement ||
  mongoose.model("FunctionalImprovement", FunctionalImprovementSchema);
