import { verify } from "jsonwebtoken";
import {
  createAccessToken,
  sendRefreshToken,
  createRefreshToken,
} from "@/service/AuthService";
import cookie from "cookie";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export default async function refresh_token(req, res) {
  dbConnect();
  if (req.method === "POST") {
    if (!req.headers.cookie) return res.send({ ok: false, accessToken: "" });
    const getToken = cookie.parse(req.headers.cookie);
    const token = getToken.refreshToken;

    if (!token) return res.send({ ok: false, accessToken: "" });
    let payload = null;

    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET);

      const user = await User.findOne(
        {
          email: payload.email,
        },
        {
          _id: true,
          firstname: true,
          lastname: true,
          email: true,
        }
      );

      if (!user) return res.send({ ok: false, accessToken: "" });

      sendRefreshToken(res, createRefreshToken(user));
      const accessToken = createAccessToken(user);

      return res.send({ ok: true, accessToken, user });
    } catch (e) {
      console.log(e);
      return res.send({ ok: false, accessToken: "" });
    }
  } else {
    res.status(500).send();
  }
}
