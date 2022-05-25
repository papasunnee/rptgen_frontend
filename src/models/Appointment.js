import mongoose from "mongoose";

/* AppointmentSchema will correspond to a collection in your MongoDB database. */
const AppointmentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname."],
      maxlength: [20, "Firstname cannot be more than 60 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname."],
      maxlength: [20, "Lastname cannot be more than 60 characters"],
    },
    middlename: {
      type: String,
      maxlength: [20, "Lastname cannot be more than 60 characters"],
    },
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
