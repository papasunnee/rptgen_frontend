import bcryptjs from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "@/service/AuthService";

export default async (req, res) => {
  dbConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid login details");
      }

      const passwordCompare = await bcryptjs.compare(password, user.password);
      if (!passwordCompare) {
        throw new Error("Invalid login details");
      }
      const token = createRefreshToken(user);
      sendRefreshToken(res, token);
      const accessToken = createAccessToken(user);
      return res.status(200).json({
        user: {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          isAdmin: user.isAdmin,
          role: user.role,
        },
        accessToken,
      });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
  return res.status(501).json({ message: "Invalid method" });
};
