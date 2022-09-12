import dbConnect from "@/lib/dbConnect";
import cookie from "cookie";
import { verify } from "jsonwebtoken";
import User from "@/models/User";
import Patient from "@/models/Patient";
import MPN from "@/models/MPN";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  let mpns;
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
          mpns = await MPN.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          mpns = await MPN.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { mpns },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }

    case "POST":
      try {
        let mpn = await MPN.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.mpns.push(mpn._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { mpn, patientRecord },
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
          let updateMPN = await MPN.findOneAndUpdate(
            { _id: put_id },
            req.body,
            {
              new: true,
            }
          );

          return res.status(400).json({ success: true, data: { updateMPN } });
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
          const mpn = await MPN.findOneAndDelete({
            _id: delete_id,
          });

          if (mpn) {
            const patientRecord = await Patient.findOne({
              _id: mpn.patient_id,
            });
            const itemToRemove = patientRecord.mpns.findIndex(
              (item) => item == mpn._id
            );
            if (itemToRemove > -1) {
              patientRecord.mpns.splice(itemToRemove, 1);
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
