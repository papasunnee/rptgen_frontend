import dbConnect from "@/lib/dbConnect";
import Patient from "@/models/Patient";
import FunctionalImprovement from "@/models/FunctionalImprovement";
import mongoose from "mongoose";

export default async function handler(req, res) {
  const { method } = req;

  let functionalImprovements;
  const id = req.query.patient_id;
  const patient_id = req.body.patient_id;
  const put_id = req.body._id;
  const delete_id = req.body.delete_id;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          functionalImprovements = await FunctionalImprovement.find({
            patient_id: id,
          }).exec(); /* find all the data in our database */
        } else {
          functionalImprovements = await FunctionalImprovement.find(
            {}
          ).exec(); /* find all the data in our database */
        }

        return res.status(200).json({
          success: true,
          data: { functionalImprovements },
        });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        let functionalImprovement = await FunctionalImprovement.create({
          ...req.body,
        });
        const patientRecord = await Patient.findOne({ _id: patient_id });
        patientRecord.functional_improvements.push(functionalImprovement._id);
        await patientRecord.save();

        return res.status(201).json({
          success: true,
          data: { functionalImprovement, patientRecord },
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
          let updateFunctionalImprovement =
            await FunctionalImprovement.findOneAndUpdate(
              { _id: put_id },
              req.body,
              {
                new: true,
              }
            );

          return res
            .status(400)
            .json({ success: true, data: { updateFunctionalImprovement } });
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
          const functionalImprovement =
            await FunctionalImprovement.findOneAndDelete({
              _id: delete_id,
            });

          if (functionalImprovement) {
            const patientRecord = await Patient.findOne({
              _id: functionalImprovement.patient_id,
            });
            const itemToRemove =
              patientRecord.functional_improvements.findIndex(
                (item) => item == functionalImprovement._id
              );
            if (itemToRemove > -1) {
              patientRecord.functional_improvements.splice(itemToRemove, 1);
              await patientRecord.save();
            }

            return res
              .status(400)
              .json({ success: true, data: { patientRecord } });
          }

          return res.status(400).json({ success: false });
        } else {
          console.log(delete_id);
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
