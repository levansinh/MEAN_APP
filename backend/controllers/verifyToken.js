import jwt from "jsonwebtoken";

import { UserModel } from "../models/User.js";

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    const accessToken = jwt.verify(token, process.env.JSONWEBTOKEN_TOKEN);
    console.log(accessToken);

    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
const verifyTokenWithAdmin = (req, res, next) => {
  const token = req.headers.cookie.split("=")[1];
  jwt.verify(token, process.env.JSONWEBTOKEN_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json("token khong fdung");
    }
    if (user.isAdmin) {
      req.user = user;
      next();
    } else {
      res.status(403).json({ message: "ban khong du quyen" });
    }
  });
};

export { verifyToken, verifyTokenWithAdmin };

