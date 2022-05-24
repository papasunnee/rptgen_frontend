import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import User from "@/models/User";

export default async function handler(req, res) {
  dbConnect();

  const ref = req.query.reference;
  const userEmail = req.query.email;
  const course_name = req.query.course;
  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${ref}`,
      {
        method: "GET",
        headers: {
          authorization:
            "Bearer sk_test_166374b1badab64a6a379debd9c1f86ad3a6d9aa",
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
      }
    );
    const { data } = await response.json();
    if (data.status == "success") {
      const { reference, amount, paid_at, channel, currency } = data;
      const user = await User.findOne({ email: userEmail });
      if (user) {
        const payment = await Payment.create({
          paymentRef: reference,
          amount,
          course_name,
          payment_date: paid_at,
          paymentType: channel,
          currency,
          user: user._id,
        });
        user.payments.push(payment);
        await user.save();
        return res.status(200).json({
          payment,
          user,
          data,
        });
      } else {
        throw new Error("Payment Successful but cant find user record");
      }
    } else {
      throw new Error("Error with payment");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({
      message: "Payment not verified",
      success: false,
      error: error.message,
    });
  }
}
