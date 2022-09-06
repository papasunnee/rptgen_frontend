import mongoose from "mongoose";
import Patient from "./Patient";

/* JobDescriptionOtherDetailsSchema will correspond to a collection in your MongoDB database. */

const JobDescriptionOtherDetailsSchema = new mongoose.Schema(
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
    value_h: {
      type: Boolean,
      default: false,
    },
    value_h_t: {
      type: String,
    },
    value_i: {
      type: Boolean,
      default: false,
    },
    value_i_t: {
      type: String,
    },
    value_j: {
      type: Boolean,
      default: false,
    },
    value_j_t: {
      type: String,
    },
    value_k: {
      type: Boolean,
      default: false,
    },
    value_k_t: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobDescriptionOtherDetails ||
  mongoose.model(
    "JobDescriptionOtherDetails",
    JobDescriptionOtherDetailsSchema
  );
