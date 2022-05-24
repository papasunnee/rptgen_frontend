import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let patients;
        let id = req?.query?.id;
        if (id && (id != "undefined" || id != null || id != "null")) {
          patients = await Patient.findOne(
            {
              _id: id,
            },
            {
              password: false,
            }
          ).populate("appointments"); /* find all the data in our database */
        } else {
          patients = await Patient.find({}).populate(
            "appointments"
          ); /* find all the data in our database */
        }
        return res.status(200).json({ success: true, data: patients });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        const patient = await Patient.create(
          req.body
        ); /* create a new model in the database */
        return res.status(201).json({ success: true, data: patient });
      } catch (error) {
        return res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
}
