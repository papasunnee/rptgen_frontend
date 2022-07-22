import mongoose from "mongoose";

/* UserSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema(
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
    email: {
      type: String,
      required: [true, "Please provide your email."],
    },
    phone: {
      type: String,
      required: [true, "Please provide your phone number."],
      maxlength: [12, "Phone cannot be more than 12 characters"],
    },
    password: {
      type: String,
      required: [true, "Please provide your password."],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
