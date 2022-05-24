async function handler(req, res) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    res.clearCookie();
    return res
      .status(201)
      .json({ success: true, message: "Successfully logged out" });

    //Close DB connection
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
}

export default handler;
