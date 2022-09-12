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
    abdominal_pain: {
      type: Boolean,
      default: false,
    },
    chest_pain: {
      type: Boolean,
      default: false,
    },
    irregular_heartbeats: {
      type: Boolean,
      default: false,
    },
    diarrhea: {
      type: Boolean,
      default: false,
    },
    upset_stomach: {
      type: Boolean,
      default: false,
    },
    abdominal_bloating: {
      type: Boolean,
      default: false,
    },
    abdominal_gas: {
      type: Boolean,
      default: false,
    },
    shortness_of_breath: {
      type: Boolean,
      default: false,
    },
    hypertension: {
      type: Boolean,
      default: false,
    },
    waking_up_frequently_at_night: {
      type: Boolean,
      default: false,
    },
    palpitations: {
      type: Boolean,
      default: false,
    },
    sexual_problems: {
      type: Boolean,
      default: false,
    },
    trouble_falling_asleep: {
      type: Boolean,
      default: false,
    },
    diabetes: {
      type: Boolean,
      default: false,
    },
    excessive_pain: {
      type: Boolean,
      default: false,
    },
    headaches: {
      type: Boolean,
      default: false,
    },
    sudden_confusion: {
      type: Boolean,
      default: false,
    },
    forget_recent_conversation: {
      type: Boolean,
      default: false,
    },
    misplacing_items: {
      type: Boolean,
      default: false,
    },
    poor_judgement: {
      type: Boolean,
      default: false,
    },
    swallowing_problems: {
      type: Boolean,
      default: false,
    },
    dizziness_or_vertigo: {
      type: Boolean,
      default: false,
    },
    forgets_recent_events: {
      type: Boolean,
      default: false,
    },
    language_problem: {
      type: Boolean,
      default: false,
    },
    difficulty_in_reading: {
      type: Boolean,
      default: false,
    },
    difficulty_in_writing: {
      type: Boolean,
      default: false,
    },
    nausea: {
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

export default mongoose.models.PresentComplaint ||
  mongoose.model("PresentComplaint", PresentComplaintSchema);
