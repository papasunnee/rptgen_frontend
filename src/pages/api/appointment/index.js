import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import Doctor from "@/models/Doctor";
import Patient from "@/models/Patient";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let appointments;
        let id = req?.query?.id;
        if (id && (id != "undefined" || id != null || id != "null")) {
          appointments = await Appointment.findOne({
            _id: id,
          })
            // .populate("doctors")
            .populate("patient"); /* find all the data in our database */
        } else {
          appointments = await Appointment.find({})
            // .populate("doctors")
            .populate("patient"); /* find all the data in our database */
        }
        return res.status(200).json({
          success: true,
          data: { appointments },
        });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        const appointment = await Appointment.create(
          req.body
        ); /* create a new model in the database */
        return res.status(201).json({ success: true, data: appointment });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
