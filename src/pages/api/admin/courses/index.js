import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import Course from "@/models/Course";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let courses;
        let id = req?.query?.id;
        if (id && (id != "undefined" || id != null || id != "null")) {
          courses = await Course.findOne({
            _id: id,
          }); /* find all the data in our database */
        } else {
          courses = await Course.find(); /* find all the data in our database */
        }
        res.status(200).json({ success: true, courses });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const course = await Course.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, course });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
