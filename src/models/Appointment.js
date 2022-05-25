import mongoose from "mongoose";

/* AppointmentSchema will correspond to a collection in your MongoDB database. */
const AppointmentSchema = new mongoose.Schema(
  {
    appointment_date: {
      type: Date,
      required: [true, "Please provide appointment date."],
    },
    minTime: {
      type: Number,
      required: [true, "Please provide appointment start time."],
    },
    duration: {
      type: Number,
      required: [true, "Please provide appointment duration in minutes"],
    },
    condition: [
      {
        type: String,
      },
    ],
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
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
