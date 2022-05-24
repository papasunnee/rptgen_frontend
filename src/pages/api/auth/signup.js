import { hash } from "bcryptjs";
import nodeMailer from "nodemailer";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

async function handler(req, res) {
  //Connect with database
  await dbConnect();

  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const {
      firstname,
      lastname,
      email,
      phone,
      password,
      trainingCategory,
      location,
    } = req.body;

    // Validate on server here

    try {
      const userExists = await User.findOne({ email });

      //Send error response if duplicate user is found
      if (userExists) {
        res.status(422).json({ message: "User already exists" });
        return;
      }
      //Hash password
      await User.create({
        firstname,
        lastname,
        email,
        phone,
        trainingCategory,
        location,
        password: await hash(password, 12),
      });
      // Send verification email
      const transporter = nodeMailer.createTransport({
        host: "smtp.zoho.com",
        secure: true,
        port: 465,
        auth: {
          user: "admin@eirenehealthcare.com",
          pass: "V1ct0r1a@2",
        },
      });

      const mailOptions = {
        from: "admin@eirenehealthcare.com", // sender address
        to: "papasunnee@gmail.com",
        subject: "Verify Your Email", // Subject line
        html: <p>test</p>, // plain text body
      };

      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            "Server is ready to take messages, process sending later"
          );
        }
      });

      // transporter.sendMail(mailOptions, function (err, info) {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log({ info });
      //   }
      // });

      // Send success response
      return res.status(201).json({ success: true, message: "User created" });
    } catch (error) {
      return res.status(422).json({ success: false, error: error.message });
    }

    //Close DB connection
  } else {
    //Response for other than POST method
    return res.status(403).json({ message: "Invalid Request" });
  }
}

export default handler;
