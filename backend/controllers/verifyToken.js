import jwt from "jsonwebtoken";

import { UserModel } from "../models/User.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken
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
const verifyTokenWithAdmin = (req, res, next) => {
  // const token = req.headers.cookie.split("=")[1];
  const token = req.cookies.accessToken
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

const checkToken = (req,res,next) => {
  const token = req.cookies.accessToken
  if(token) {
    next()
  }else{
    res.status(403).json({message:"You had Logined"})
  }
}

export { verifyToken, verifyTokenWithAdmin,checkToken };

