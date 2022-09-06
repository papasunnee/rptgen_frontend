import mongoose from "mongoose";
import Patient from "./Patient";

/* JobDescriptionActivitySchema will correspond to a collection in your MongoDB database. */

const JobDescriptionActivitySchema = new mongoose.Schema(
  {
    sitting: {
      type: String,
    },
    walking: {
      type: String,
    },
    standing: {
      type: String,
    },
    bending_neck: {
      type: String,
    },
    bending_waist: {
      type: String,
    },
    squatting: {
      type: String,
    },
    climbing: {
      type: String,
    },
    kneeling: {
      type: String,
    },
    crawling: {
      type: String,
    },
    turning_neck: {
      type: String,
    },
    twisting_waist: {
      type: String,
    },
    reaching_above_shoulder_level: {
      type: String,
    },
    reaching_below_shoulder_level: {
      type: String,
    },
    repetetive_use_of_hand: {
      type: String,
    },
    simple_grasping_right: {
      type: String,
    },
    simple_grasping_left: {
      type: String,
    },
    power_grasping_right: {
      type: String,
    },
    power_grasping_left: {
      type: String,
    },
    fine_manipulation_right: {
      type: String,
    },
    fine_manipulation_left: {
      type: String,
    },
    pushing_and_pulling_right: {
      type: String,
    },
    pushing_and_pulling_left: {
      type: String,
    },
    reaching_above_shoulder_right: {
      type: String,
    },
    reaching_above_shoulder_left: {
      type: String,
    },
    keyboarding_power_grasping_right: {
      type: String,
    },
    keyboarding_power_grasping_left: {
      type: String,
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.JobDescriptionActivity ||
  mongoose.model("JobDescriptionActivity", JobDescriptionActivitySchema);
