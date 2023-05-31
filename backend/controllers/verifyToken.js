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
  verifyToken(req, res, () => {
    if (req.user.role === 1) {
      next();
    } else {
      res.status(403).json({ message: "You are not qualified" });
    }
  });
};

export {verifyToken,verifyTokenWithAdmin}

// ,
//     (req, res, next) => {
//       const token = req.cookies.accessToken;
//       console.log(token);
//       console.log(process.env.JSONWEBTOKEN_TOKEN);
//       const accessToken = jwt.verify(token, process.env.JSONWEBTOKEN_TOKEN);
//       if (accessToken.isAdmin) {
//         res.json({ message: "you are admin" });
        
//       } else {
//         res.json({ message: "you are not admin" });
//       }
      
//       console.log(accessToken);
//     },