import mongoose from "mongoose";
import Patient from "./Patient";

/* PreInjuryLiftingCapacitySchema will correspond to a collection in your MongoDB database. */

const PreInjuryLiftingCapacitySchema = new mongoose.Schema(
  {
    lifting_pound_1: {
      type: String,
    },
    lifting_pound_2: {
      type: String,
    },
    lifting_pound_3: {
      type: String,
    },
    lifting_pound_4: {
      type: String,
    },
    lifting_pound_5: {
      type: String,
    },
    lifting_pound_6: {
      type: String,
    },
    lifting_height_1: {
      type: String,
    },
    lifting_height_2: {
      type: String,
    },
    lifting_height_3: {
      type: String,
    },
    lifting_height_4: {
      type: String,
    },
    lifting_height_5: {
      type: String,
    },
    lifting_height_6: {
      type: String,
    },
    carrying_pound_1: {
      type: String,
    },
    carrying_pound_2: {
      type: String,
    },
    carrying_pound_3: {
      type: String,
    },
    carrying_pound_4: {
      type: String,
    },
    carrying_pound_5: {
      type: String,
    },
    carrying_pound_6: {
      type: String,
    },
    carrying_height_1: {
      type: String,
    },
    carrying_height_2: {
      type: String,
    },
    carrying_height_3: {
      type: String,
    },
    carrying_height_4: {
      type: String,
    },
    carrying_height_5: {
      type: String,
    },
    carrying_height_6: {
      type: String,
    },
    ground_to_waist: {
      type: String,
    },
    chest_to_overhead: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.PreInjuryLiftingCapacity ||
  mongoose.model("PreInjuryLiftingCapacity", PreInjuryLiftingCapacitySchema);
