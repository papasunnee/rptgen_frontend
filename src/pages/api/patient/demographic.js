import dbConnect from "@/lib/dbConnect";
import PatientDemographic from "@/models/PatientDemographic";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      break;
    case "POST":
      try {
        const patientDemographic = await PatientDemographic.create(
          req.body
        ); /* create a new model in the database */
        return res
          .status(201)
          .json({ success: true, data: patientDemographic });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

    default:
      return res.status(400).json({ success: false });
  }
}
