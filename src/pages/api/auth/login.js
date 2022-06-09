import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import cookies from "@/utils/cookies";

const JWT_SECRET = process.env.JWT_SECRET;

async function handler(req, res) {
  //Connect with database
  await dbConnect();

  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password } = req.body;
    //Validate
    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    try {
      const user = await User.findOne({ email });

      //Send error response if user not found
      if (!user) {
        res
          .status(422)
          .json({ success: false, message: "Invalid login details" });
        return;
      }

      //Hash password
      const hash = await bcryptjs.compare(password, user.password);
      console.log(hash);
      if (!hash) {
        return res
          .status(422)
          .json({ success: false, message: "Invalid login detail" });
      }
      const token = jwt.sign(
        {
          data: { email: user.email },
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      //Send success response
      res.cookie(`token`, token, { path: "/" });
      return res
        .status(201)
        .json({ success: true, message: "Login Successful" });
    } catch (error) {
      res.status(422).json({ success: false, error: error.message });
    }

    //Close DB connection
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default cookies(handler);
