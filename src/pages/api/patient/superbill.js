import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";
import SuperBill from "@/models/SuperBill";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  let superBills;
  const id = req.query.patient_id;
  const patient_id = req.body.patient_id;
  const put_id = req.body._id;
  const delete_id = req.body.delete_id;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          superBills = await SuperBill.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          superBills = await SuperBill.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { superBills },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        let superbill = await SuperBill.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.super_bills.push(superbill._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { superbill, patientRecord },
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
          let updateSuperBill = await SuperBill.findOneAndUpdate(
            { _id: put_id },
            req.body,
            {
              new: true,
            }
          );

          return res
            .status(400)
            .json({ success: true, data: { updateSuperBill } });
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
          const superBill = await SuperBill.findOneAndDelete({
            _id: delete_id,
          });

          if (superBill) {
            const patientRecord = await Patient.findOne({
              _id: superBill.patient_id,
            });
            const itemToRemove = patientRecord.super_bills.findIndex(
              (item) => item == superBill._id
            );
            if (itemToRemove > -1) {
              patientRecord.super_bills.splice(itemToRemove, 1);
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
