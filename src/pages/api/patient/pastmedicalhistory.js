import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";
import PastMedicalHistory from "@/models/PastMedicalHistory";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  let pastMedicalHistories;
  const id = req.query.patient_id;
  const patient_id = req.body.patient_id;
  const put_id = req.body._id;
  const delete_id = req.body.delete_id;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          pastMedicalHistories = await PastMedicalHistory.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          pastMedicalHistories = await PastMedicalHistory.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { pastMedicalHistories },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }

    case "POST":
      try {
        let pastmedicalhistory = await PastMedicalHistory.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.past_medical_histories.push(pastmedicalhistory._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { pastmedicalhistory, patientRecord },
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
          let updatePastMedicalHistory =
            await PastMedicalHistory.findOneAndUpdate(
              { _id: put_id },
              req.body,
              {
                new: true,
              }
            );

          return res
            .status(400)
            .json({ success: true, data: { updatePastMedicalHistory } });
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
          const pastMedicalHistory = await PastMedicalHistory.findOneAndDelete({
            _id: delete_id,
          });

          if (pastMedicalHistory) {
            const patientRecord = await Patient.findOne({
              _id: pastMedicalHistory.patient_id,
            });
            const itemToRemove = patientRecord.past_medical_histories.findIndex(
              (item) => item == pastMedicalHistory._id
            );
            if (itemToRemove > -1) {
              patientRecord.past_medical_histories.splice(itemToRemove, 1);
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
