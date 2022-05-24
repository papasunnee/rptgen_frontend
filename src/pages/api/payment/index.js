import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import User from "@/models/User";

export default async function handler(req, res) {
  dbConnect();
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const payments = await Payment.find({}).populate({ path: "user" });
        return res.json({ payments });
      } catch (error) {
        return res.status(200).json({
          message: "Payment was not successfull",
          success: false,
          error: error.message,
        });
      }
    case "POST":
      try {
        const { amount, course_name, user, paymentType } = req.body;
        const userData = await User.findOne({ email: user });
        if (!userData) {
          return res.status(404).json({
            success: false,
            data: userData,
            user: user,
          });
        }
        const payment = await Payment.create({
          reference: "no reference",
          amount: amount * 100,
          course_name,
          user: userData,
          paymentType: paymentType,
          payment_date: new Date().toISOString(),
        }); /* create a new model in the database */
        userData.payments.push(payment._id);
        await userData.save();
        return res
          .status(201)
          .json({ success: true, data: { payment, userData } });
      } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
      }
    default:
      res.status(400).json({ success: false, data: "Unprocessed" });
      break;
  }
}
