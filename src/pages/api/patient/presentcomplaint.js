import dbConnect from "@/lib/dbConnect";
import cookie from "cookie";
import { verify } from "jsonwebtoken";
import User from "@/models/User";
import Patient from "@/models/Patient";
import PresentComplaint from "@/models/PresentComplaint";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  let presentComplaints;
  const id = req.query.patient_id;
  const patient_id = req.body.patient_id;
  const put_id = req.body._id;
  const delete_id = req.body.delete_id;

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
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          presentComplaints = await PresentComplaint.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          presentComplaints = await PresentComplaint.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { presentComplaints },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }

    case "POST":
      try {
        let presentComplaint = await PresentComplaint.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.present_complaints.push(presentComplaint._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { presentComplaint, patientRecord },
        });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "PUT":
      try {
        if (
          put_id &&
          (put_id != "undefined" || put_id != null || put_id != "null")
        ) {
          delete req.body._id;
          let updatePresentComplaint = await PresentComplaint.findOneAndUpdate(
            { _id: put_id },
            req.body,
            {
              new: true,
            }
          );

          return res
            .status(400)
            .json({ success: true, data: { updatePresentComplaint } });
        } else {
          return res
            .status(400)
            .json({ success: false, error: "unprocessed put_id" });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "DELETE":
      try {
        if (
          delete_id &&
          (delete_id != "undefined" || delete_id != null || delete_id != "null")
        ) {
          const presentComplaint = await PresentComplaint.findOneAndDelete({
            _id: delete_id,
          });

          if (presentComplaint) {
            const patientRecord = await Patient.findOne({
              _id: presentComplaint.patient_id,
            });
            const itemToRemove = patientRecord.present_complaints.findIndex(
              (item) => item == presentComplaint._id
            );
            if (itemToRemove > -1) {
              patientRecord.present_complaints.splice(itemToRemove, 1);
              await patientRecord.save();
            }

            return res
              .status(400)
              .json({ success: true, data: { patientRecord } });
          }

          return res.status(400).json({ success: false });
        } else {
          return res
            .status(400)
            .json({ success: false, error: "Unprocessed delete_id" });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    default:
      return res.status(400).json({ success: false });
  }
}
