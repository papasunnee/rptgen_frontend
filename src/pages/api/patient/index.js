import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import Patient from "@/models/Patient";

export default async function handler(req, res) {
  const { method } = req;

  let patients;
  let id = req?.query?.id;
  let put_id = req?.body?.id;
  let page = req?.query?.page;
  let perPage = 10;
  let paginationData = {};

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          patients = await Patient.findOne({
            _id: id,
          }).populate("appointments"); /* find all the data in our database */
        } else if (
          page &&
          (typeof page !== undefined || typeof page != null || page != "null")
        ) {
          patients = await Patient.find({})
            .limit(perPage)
            .skip(perPage * page);
        } else {
          patients = await Patient.find({}).populate(
            "appointments"
          ); /* find all the data in our database */
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
        if (
          put_id &&
          (put_id != "undefined" || put_id != null || put_id != "null")
        ) {
          const appointment = await Appointment.create({
            patient: put_id,
            doctor: req.body.doctor,
            appointment_date: new Date(req.body.appointment_date),
            appointment_hour: req.body.appointment_hour,
            appointment_minute: req.body.appointment_minute,
            appointment_mod: req.body.appointment_mod,
          });
          let patient = await Patient.findOne({ _id: put_id });
          await patient.appointments.push(appointment._id);
          await patient.save();
          return appointment;
        } else {
          return res
            .status(400)
            .json({ success: false, error: "unprocessed put_id" });
        }
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
      return res.status(400).json({ success: false, error: "unprocessed" });
    default:
      return res.status(400).json({ success: false });
      break;
  }
}
