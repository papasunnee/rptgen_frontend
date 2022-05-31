import dbConnect from "@/lib/dbConnect";
import PatientPreAuthorization from "@/models/PatientPreAuthorization";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      break;
    case "POST":
      try {
        const patientPreAuthorization = await PatientPreAuthorization.create(
          req.body
        ); /* create a new model in the database */
        return res
          .status(201)
          .json({ success: true, data: patientPreAuthorization });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

    default:
      return res.status(400).json({ success: false });
  }
}
