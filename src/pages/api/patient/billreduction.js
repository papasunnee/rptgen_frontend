import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";
import BillReduction from "@/models/BillReduction";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  let billReductions;
  const id = req.query.patient_id;
  const patient_id = req.body.patient_id;
  const delete_id = req.body.delete_id;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          billReductions = await BillReduction.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          billReductions = await BillReduction.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { billReductions },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        let billreduction = await BillReduction.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.bill_reductions.push(billreduction._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { billreduction, patientRecord },
        });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "DELETE":
      try {
        if (
          delete_id &&
          (delete_id != "undefined" || delete_id != null || delete_id != "null")
        ) {
          const billReduction = await BillReduction.findOneAndDelete({
            _id: delete_id,
          });

          if (billReduction) {
            const patientRecord = await Patient.findOne({
              _id: billReduction.patient_id,
            });
            const itemToRemove = patientRecord.bill_reductions.findIndex(
              (item) => item == billReduction._id
            );
            if (itemToRemove > -1) {
              patientRecord.bill_reductions.splice(itemToRemove, 1);
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
