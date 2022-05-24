import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import cookies from "utils/cookies";

const JWT_SECRET = process.env.JWT_SECRET;

async function handler(req, res) {
  //Connect with database
  await dbConnect();
  if (req.cookies?.token) {
    try {
      jwt.verify(req.cookies.token, process.env.JWT_SECRET);
      return res.status(200).json({ message: error.message });
    } catch (error) {
      res.clearCookie("token", { path: "/" });
      return res.status(500).json({ message: error.message });
    }
  }
  //Only POST mothod is accepted
}

export default cookies(handler);
