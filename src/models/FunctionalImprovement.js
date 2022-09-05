import mongoose from "mongoose";
import Patient from "./Patient";

/* FunctionalImprovementSchema will correspond to a collection in your MongoDB database. */

const FunctionalImprovementSchema = new mongoose.Schema(
  {
    value_a: {
      type: Boolean,
      default: false,
    },
    value_a_t: {
      type: String,
    },
    value_b: {
      type: Boolean,
      default: false,
    },
    value_b_t: {
      type: String,
    },
    value_c: {
      type: Boolean,
      default: false,
    },
    value_c_t: {
      type: String,
    },
    value_d: {
      type: Boolean,
      default: false,
    },
    value_d_t: {
      type: String,
    },
    value_e: {
      type: Boolean,
      default: false,
    },
    value_e_t: {
      type: String,
    },
    value_f: {
      type: Boolean,
      default: false,
    },
    value_f_t: {
      type: String,
    },
    value_g: {
      type: Boolean,
      default: false,
    },
    value_g_t: {
      type: String,
    },
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
