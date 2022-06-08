import mongoose from "mongoose";
import Patient from "./Patient";

/* SuperBillSchema will correspond to a collection in your MongoDB database. */

const SuperBillSchema = new mongoose.Schema(
  {
    initial_history_code: {
      type: String,
    },
    initial_physical_exam_code: {
      type: String,
    },
    prolonged_code: {
      type: String,
    },
    review_records: {
      type: String,
    },
    re_evaluation_code: {
      type: String,
    },
    eveluation_prolonged_code: {
      type: String,
    },
    review_records: {
      type: String,
    },

    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.SuperBill ||
  mongoose.model("SuperBill", SuperBillSchema);
