import mongoose from "mongoose";
import User from "./User";
import Appointment from "./Appointment";
import PatientDemographic from "./PatientDemographic";
import PatientPreAuthorization from "./PatientPreAuthorization";
import FunctionalImprovement from "./FunctionalImprovement";
import MPN from "./MPN";
import JobDescription from "./JobDescription";
import PresentComplaint from "./PresentComplaint";
import Diagnosis from "./Diagnosis";
import SpecificAccident from "./SpecificAccident";
import CumulativeTrauma from "./CumulativeTrauma";
import JobDescriptionOtherDetails from "./JobDescriptionOtherDetails";
import JobDescriptionActivity from "./JobDescriptionActivity";
import PreInjuryLiftingCapacity from "./PreInjuryLiftingCapacity";
import PastMedicalHistory from "./PastMedicalHistory";
import OtherPastMedicalHistory from "./OtherPastMedicalHistory";
import SuperBill from "./SuperBill";
import BillReduction from "./BillReduction";

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
      type: String,
      required: [true, "Please provide your home phone."],
    },
    providers_code: {
      type: String,
      required: [true, "Please provide your providers code"],
      maxlength: [50, "Providers Code cannot be more than 50 characters"],
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
      default:
        "https://res.cloudinary.com/altitude-tech-com/image/upload/v1654090662/rptgen/default.png",
      maxlength: [200, "Image URL cannot be more than 20 characters"],
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
    functional_improvements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FunctionalImprovement",
      },
    ],
    job_descriptions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobDescription",
      },
    ],
    diagnosis: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Diagnosis",
      },
    ],
    present_complaints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PresentComplaint",
      },
    ],
    mpns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MPN",
      },
    ],
    cumulative_traumas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CumulativeTrauma",
      },
    ],
    specific_accidents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SpecificAccident",
      },
    ],
    job_description_other_details: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobDescriptionOtherDetails",
      },
    ],
    job_description_activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobDescriptionActivity",
      },
    ],
    pre_injury_lifting_capacities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PreInjuryLiftingCapacity",
      },
    ],
    past_medical_histories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PastMedicalHistory",
      },
    ],
    other_past_medical_histories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OtherPastMedicalHistory",
      },
    ],
    super_bills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SuperBill",
      },
    ],
    bill_reductions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "BillReduction",
      },
    ],
    patient_demographic_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PatientDemographic",
    },
    pre_authorization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PatientPreAuthorization",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    role: {
      type: String,
      default: "patient",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Patient ||
  mongoose.model("Patient", PatientSchema);
