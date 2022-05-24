import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import User from "@/models/User";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        let users;
        let id = req?.query?.id;
        if (id && (id != "undefined" || id != null || id != "null")) {
          users = await User.findOne(
            {
              _id: id,
            },
            {
              password: false,
            }
          ).populate("payments"); /* find all the data in our database */
        } else {
          users = await User.find(
            {
              $or: [{ isAdmin: { $ne: true } }, { isAdmin: null }],
            },
            {
              password: false,
            }
          ).populate("payments"); /* find all the data in our database */
        }
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const user = await User.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
