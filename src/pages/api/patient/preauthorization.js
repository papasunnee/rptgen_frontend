import dbConnect from "@/lib/dbConnect";
import cookie from "cookie";
import { verify } from "jsonwebtoken";
import User from "@/models/User";
import Patient from "@/models/Patient";
import PatientPreAuthorization from "@/models/PatientPreAuthorization";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  const patient_id = req.body.patient_id;
  const pre_authorization_id =
    req.body.patient_demographic_id ?? new mongoose.mongo.ObjectID();

  if (!req.headers.cookie) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  const getToken = cookie.parse(req.headers.cookie);

  if (!getToken.refreshToken) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }

  const payload = verify(
    getToken.refreshToken,
    process.env.REFRESH_TOKEN_SECRET
  );

  const user = await User.findOne(
    {
      email: payload?.userEmail,
    },
    {
      password: false,
    }
  );

  if (!user) {
    return res.json({ isLoggedIn: false, error: "Unauthorized" });
  }

  switch (method) {
    case "GET":
      break;
    case "POST":
      try {
        let preAuthorization = await PatientPreAuthorization.findOneAndUpdate(
          {
            $and: [{ _id: pre_authorization_id }, { patient_id }],
          },
          { ...req.body },
          { new: true, upsert: true }
        );
        const patientRecord = await Patient.findOneAndUpdate(
          { _id: patient_id },
          { pre_authorization: preAuthorization._id }
        );

        return res
          .status(201)
          .json({ success: true, data: { preAuthorization, patientRecord } });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }

    default:
      return res.status(400).json({ success: false });
  }
}
