import cookie from "cookie";
import { verify } from "jsonwebtoken";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import PatientDemographic from "@/models/PatientDemographic";
import PatientPreAuthorization from "@/models/PatientPreAuthorization";
import FunctionalImprovement from "@/models/FunctionalImprovement";
import JobDescription from "@/models/JobDescription";
import PastMedicalHistory from "@/models/PastMedicalHistory";
import SuperBill from "@/models/SuperBill";
import BillReduction from "@/models/BillReduction";
import Patient from "@/models/Patient";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  let patient;
  let patient_id = req?.body?.patient_id;
  let providers_key = req?.body?.providers_key;
  let providers_code = req?.body?.providers_code;
  let delete_id = req?.body?.delete_id;
  let page = req?.query?.page;
  let perPage = 10;

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

  const user = await User.findOne({
    email: payload?.userEmail,
  });

  if (!user) {
    return res.json({ isLoggedIn: false, error: "Unauthorized" });
  }

  switch (method) {
    case "POST":
      try {
        const hash = await bcryptjs.compare(providers_key, user?.password);
        if (!hash) {
          throw new Error("Unauthorised");
        }
        if (patient_id) {
          patient = await Patient.findOne({
            _id: patient_id,
            providers_code: providers_code,
          });
        } else {
          patient = await Patient.findOne({
            providers_code: providers_code,
          });
        }

        if (!patient) {
          throw new Error("Unauthorised");
        }
        return res.status(201).json({ success: true, data: patient });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    default:
      return res.status(400).json({ success: false, error: "Invalid verb" });
  }
}
