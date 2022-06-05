import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import Doctor from "@/models/Doctor";
import Patient from "@/models/Patient";

export default async function handler(req, res) {
  const { method } = req;
  let appointments;
  let id = req?.query?.id;
  let put_id = req?.body?.put_id;
  let delete_id = req?.body?.delete_id;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        if (id && (id != "undefined" || id != null || id != "null")) {
          appointments = await Appointment.findOne({
            _id: id,
          })
            // .populate("doctors")
            .populate("patient"); /* find all the data in our database */
        } else {
          appointments = await Appointment.find({})
            // .populate("doctors")
            .populate("patient"); /* find all the data in our database */
        }
        return res.status(200).json({
          success: true,
          data: { appointments },
        });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    case "POST":
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
          return res
            .status(400)
            .json({ success: true, data: { appointment, patient } });
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
          const deleteAppointmentResponse = await Appointment.deleteOne({
            _id: delete_id,
          });
          if (deleteAppointmentResponse) {
            return res
              .status(400)
              .json({ success: true, data: deleteAppointmentResponse });
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
      res.status(400).json({ success: false });
      break;
  }
}
