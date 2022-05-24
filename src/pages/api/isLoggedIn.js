import { verify } from "jsonwebtoken";
import cookie from "cookie";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import Payment from "@/models/Payment";

export default async function isLoggedIn(req, res) {
  dbConnect();

  if (!req.headers.cookie)
    return res.json({ isLoggedIn: false, error: "No user logged in" });
  const getToken = cookie.parse(req.headers.cookie);
  const token = getToken.refreshToken;

  if (!token)
    return res.json({ isLoggedIn: false, error: "No user logged in" });

  let payload = null;

  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);

    const user = await User.findOne(
      {
        email: payload.userEmail,
      },
      {
        password: false,
      }
    ).populate({ path: "payments", model: Payment });

    if (!user) {
      return res.json({ isLoggedIn: false, error: "Invalid user" });
    }

    return res.json({ isLoggedIn: true, user, error: null });
  } catch (e) {
    console.log(e);
    return res.json({ isLoggedIn: false, error: e.message });
  }
}
