import mongoose from "mongoose";

const { Schema } = mongoose;

/* PaymentSchema will correspond to a collection in your MongoDB database. */
const PaymentSchema = new Schema(
  {
    paymentType: {
      type: String,
      required: [true, "Please select medium of payment."],
    },
    paymentRef: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course_name: {
      type: String,
      required: [true, "Please select course."],
    },
    currency: {
      type: String,
      required: [true, "Please select appropraite payment currency"],
      enum: ["USD", "NGN"],
      default: "NGN",
    },
    status: {
      type: String,
      required: [true, "Please select appropraite course status."],
      enum: ["not_scheduled", "scheduled", "completed"],
      default: "not_scheduled",
    },
    payment_date: {
      type: String,
      required: [true, "Please enter payment date."],
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount paid"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
