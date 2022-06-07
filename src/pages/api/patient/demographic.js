import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";
import PatientDemographic from "@/models/PatientDemographic";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  const patient_id = req.body.patient_id;
  const patientDemographic_id =
    req.body.patient_demographic_id ?? new mongoose.mongo.ObjectID();

  await dbConnect();

  switch (method) {
    case "GET":
      break;
    case "POST":
      try {
        let patientDemographic = await PatientDemographic.findOneAndUpdate(
          {
            $and: [{ _id: patientDemographic_id }, { patient_id }],
          },
          { ...req.body },
          { new: true, upsert: true }
        );
        const patientRecord = await Patient.findOneAndUpdate(
          { _id: patient_id },
          { patient_demographic_id: patientDemographic._id }
        );

        return res
          .status(201)
          .json({ success: true, data: { patientDemographic, patientRecord } });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

    default:
      return res.status(400).json({ success: false });
  }
}
