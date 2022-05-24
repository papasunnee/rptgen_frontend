import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import Instructor from "@/models/Instructor";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let instructors;
        let id = req?.query?.id;
        if (id && (id != "undefined" || id != null || id != "null")) {
          instructors = await Instructor.findOne({
            _id: id,
          }); /* find all the data in our database */
        } else {
          instructors =
            await Instructor.find(); /* find all the data in our database */
        }
        res.status(200).json({ success: true, instructors });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        // const instructor = await Instructor.create(
        //   req.body
        // );
        /* create a new model in the database */
        const instructor = new Instructor();
        instructor.firstname = req.body.firstname;
        instructor.lastname = req.body.lastname;
        instructor.email = req.body.email;
        instructor.phone = req.body.phone;
        // instructor.coreSkills = [...req.body.coreSkills];
        const response = await instructor.save();

        res.status(201).json({ success: true, instructor: response });
      } catch (error) {
        console.log({ error });
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
