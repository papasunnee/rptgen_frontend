import mongoose from "mongoose";
import Patient from "./Patient";

/* DiagnosisSchema will correspond to a collection in your MongoDB database. */

const DiagnosisSchema = new mongoose.Schema(
  {
    value_a: {
      type: Boolean,
      default: false,
    },
    value_b: {
      type: Boolean,
      default: false,
    },
    value_c: {
      type: Boolean,
      default: false,
    },
    value_d: {
      type: Boolean,
      default: false,
    },
    value_e: {
      type: Boolean,
      default: false,
    },
    value_f: {
      type: Boolean,
      default: false,
    },
    value_g: {
      type: Boolean,
      default: false,
    },
    value_h: {
      type: Boolean,
      default: false,
    },
    value_i: {
      type: Boolean,
      default: false,
    },
    value_j: {
      type: Boolean,
      default: false,
    },
    value_k: {
      type: Boolean,
      default: false,
    },
    value_l: {
      type: Boolean,
      default: false,
    },
    value_m: {
      type: Boolean,
      default: false,
    },
    value_n: {
      type: Boolean,
      default: false,
    },
    value_o: {
      type: Boolean,
      default: false,
    },
    value_p: {
      type: Boolean,
      default: false,
    },
    value_q: {
      type: Boolean,
      default: false,
    },
    value_r: {
      type: Boolean,
      default: false,
    },
    value_s: {
      type: Boolean,
      default: false,
    },
    value_t: {
      type: Boolean,
      default: false,
    },
    value_u: {
      type: Boolean,
      default: false,
    },
    value_v: {
      type: Boolean,
      default: false,
    },
    diagnose_type: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Diagnosis ||
  mongoose.model("Diagnosis", DiagnosisSchema);
