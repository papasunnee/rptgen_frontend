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

export default async function handler(req, res) {
  const { method } = req;

  let patients;
  let id = req?.query?.id;
  let _id = req?.body?._id;
  let delete_id = req?.body?.delete_id;
  let page = req?.query?.page;
  let perPage = 10;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          patients = await Patient.findOne({
            _id: id,
          })
            .populate("appointments")
            .populate("patient_demographic_id")
            .populate("pre_authorization")
            .populate("functional_improvements")
            .populate("job_descriptions")
            .populate("past_medical_histories")
            .exec(); /* find all the data in our database */
        } else if (
          page &&
          (typeof page !== undefined || typeof page != null || page != "null")
        ) {
          patients = await Patient.find({})
            .limit(perPage)
            .skip(perPage * page)
            .populate("appointments")
            .populate("patient_demographic_id")
            .populate("pre_authorization")
            .populate("functional_improvements")
            .populate("job_descriptions")
            .populate("past_medical_histories")
            .populate("super_bills")
            .populate("bill_reductions")
            .sort({ createdAt: "asc" })
            .exec();
        } else {
          patients = await Patient.find({})
            .populate("appointments")
            .populate("patient_demographic_id")
            .populate("pre_authorization")
            .populate("functional_improvements")
            .populate("job_descriptions")
            .populate("past_medical_histories")
            .populate("super_bills")
            .populate("bill_reductions")
            .sort({ createdAt: "desc" })
            .exec(); /* find all the data in our database */
        }
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
        console.log(error);
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
      try {
        const patient = await Patient.create(
          req.body
        ); /* create a new model in the database */
        return res.status(201).json({ success: true, data: patient });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "PUT":
      try {
        if (_id && (_id != "undefined" || _id != null || _id != "null")) {
          console.log(_id);

          let updatePatient = await Patient.findOneAndUpdate(
            { _id },
            req.body,
            {
              new: true,
            }
          );

          return res
            .status(400)
            .json({ success: true, data: { updatePatient } });
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
          console.log(delete_id);
          const patient = await Patient.findOne({
            _id: delete_id,
          });
          const deleteAppointmentResponse = await Appointment.deleteMany({
            _id: { $in: patient.appointments },
          });
          if (deleteAppointmentResponse) {
            const deletePatientResponse = await Patient.deleteOne({
              _id: delete_id,
            });
            if (deletePatientResponse) {
              return res
                .status(400)
                .json({ success: true, data: { deletePatientResponse } });
            }
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
