import mongoose from "mongoose";

/* PatientSchema will correspond to a collection in your MongoDB database. */
const PatientSchema = new mongoose.Schema(
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
    street_address: {
      type: String,
      required: [true, "Please provide your street address."],
      maxlength: [100, "Lastname cannot be more than 60 characters"],
    },
    city_state_zip: {
      type: String,
      required: [true, "Please provide your city, state and zip."],
      maxlength: [100, "Lastname cannot be more than 60 characters"],
    },
    home_phone: {
      type: Number,
      required: [true, "Please provide your home phone."],
    },
    providers_code: {
      type: String,
      maxlength: [20, "Providers Code cannot be more than 20 characters"],
    },
    assistant_providers_code: {
      type: String,
      maxlength: [
        20,
        "Assistant Providers Code cannot be more than 20 characters",
      ],
    },
    image_url: {
      type: String,
      maxlength: [100, "Image URL cannot be more than 20 characters"],
    },
    birth_date: {
      type: Date,
    },
    chart_number: {
      type: Number,
      required: [true, "Please provide your chart number."],
    },
    ssn: {
      type: Number,
      required: [true, "Please provide your Social Security Number."],
    },
    gender: {
      type: String,
    },
    marital_status: {
      type: String,
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    role: {
      type: String,
      default: "patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema);
