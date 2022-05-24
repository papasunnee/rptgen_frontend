import mongoose from "mongoose";

/* CourseSChema will correspond to a collection in your MongoDB database. */
const CourseSChema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a course title."],
    },
    description: {
      type: String,
      required: [true, "Please enter course description."],
    },
    requirement: {
      type: String,
    },
    outline: {
      type: String,
      required: [true, "Please enter course outline."],
    },
    details: {
      type: String,
      required: [true, "Please enter course details."],
    },
    cost: {
      type: Number,
      required: [true, "Please enter course cost."],
    },
    currency: {
      type: String,
      required: [true, "Please enter course cost currency."],
    },
    duration: {
      type: Number,
      required: [true, "Please enter course duration."],
    },
    period: {
      type: String,
      required: [true, "Please enter course duration period."],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSChema);
