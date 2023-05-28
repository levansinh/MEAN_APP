import { UserModel } from "../models/User.js";
import md5 from 'md5'
export const userController = {
  //GET USER
  getAllUser: async (req, res) => {
    try {
      const users = await UserModel.find();
      console.log(users);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
  
  //ADD USER
  // createUser: async (req, res) => {
  //   try {
  //     const user = new UserModel({
  //       username: req.body.username,
  //       password: md5(req.body.password),
  //       email: req.body.email,
  //       phone: req.body.phone,
  //       address: req.body.address,
  //     });
  //     user.save();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
