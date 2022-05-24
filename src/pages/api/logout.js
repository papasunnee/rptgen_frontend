import cookie from "cookie";
export default (req, res) => {
  if (req.method === "POST") {
    //deletes refresh token
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("refreshToken", null, {
        httpOnly: true,
        maxAge: 0,
        path: "/",
      })
    );
    res.status(200).json({ message: "Successfuly logged out", success: true });
  } else {
    res.status(500).json({ message: "Error Logging out", success: false });
  }
};
