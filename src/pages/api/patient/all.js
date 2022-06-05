import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const patients = await Patient.find({})
          .populate("appointments")
          .exec(); /* find all the data in our database */

        const recentPatient = await Patient.findOne(
          {},
          {},
          { sort: { created_at: -1 } }
        );
        const recentPatients = await Patient.find({
          created_at: {
            $gte: new Date(
              new Date(recentPatient.created_at) - 24 * 60 * 60 * 1000 * 14
            ),
          },
        });
        return res.status(200).json({
          success: true,
          data: { patients, recentPatient, recentPatients },
        });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

    default:
      return res.status(400).json({ success: false });
  }
}
