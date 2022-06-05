import mongoose from "mongoose";
import Patient from "./Patient";

/* AppointmentSchema will correspond to a collection in your MongoDB database. */

const AppointmentSchema = new mongoose.Schema(
  {
    appointment_date: {
      type: Date,
      required: [true, "Please provide appointment date."],
    },
    appointment_hour: {
      type: Number,
      required: [true, "Please provide appointment start hour."],
    },
    appointment_minute: {
      type: Number,
      required: [true, "Please provide appointment start minute."],
    },
    appointment_mod: {
      type: String,
      required: [true, "Please provide appointment meridiem."],
    },
    condition: [
      {
        type: String,
      },
    ],
    // doctor: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Doctor",
    // },
    doctor: {
      type: String,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
