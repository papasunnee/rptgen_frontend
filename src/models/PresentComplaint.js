import mongoose from "mongoose";
import Patient from "./Patient";

/* MPNSchema will correspond to a collection in your MongoDB database. */

const PresentComplaintSchema = new mongoose.Schema(
  {
    pain: {
      type: Boolean,
      default: false,
    },
    swelling: {
      type: Boolean,
      default: false,
    },
    radicular_pain: {
      type: Boolean,
      default: false,
    },
    numbness: {
      type: Boolean,
      default: false,
    },
    tingling: {
      type: Boolean,
      default: false,
    },
    muscle_spasms: {
      type: Boolean,
      default: false,
    },
    stiffness: {
      type: Boolean,
      default: false,
    },
    decreased_rom: {
      type: Boolean,
      default: false,
    },
    clicking: {
      type: Boolean,
      default: false,
    },
    weakness: {
      type: Boolean,
      default: false,
    },
    muscle_gurading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
    },
    frequency: {
      type: String,
    },
    scale_of_pain_a: {
      type: String,
    },
    frequency_of_radicular_pain: {
      type: String,
    },
    radiating_to: {
      type: String,
    },
    numbness_frequency: {
      type: String,
    },
    muscle_spasm_frequency: {
      type: String,
    },
    decrease_range_frequency: {
      type: String,
    },
    stiffness_frequency: {
      type: String,
    },
    clicking_frequency: {
      type: String,
    },
    weakness_frequency: {
      type: String,
    },
    bilateral: {
      type: Boolean,
    },
    muscle_guarding: {
      type: Boolean,
    },
    muscle_guarding_frequency: {
      type: String,
    },
    scale_of_pain_b: {
      type: String,
    },
    comment: {
      type: String,
    },
    complaint_name: {
      type: String,
    },
    form_number: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.PresentComplaint ||
  mongoose.model("PresentComplaint", PresentComplaintSchema);
