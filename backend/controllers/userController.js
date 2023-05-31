import { UserModel } from "../models/User.js";
import md5 from "md5";
export const userController = {
  //GET USER
  getAllUser: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const user = await UserModel.findOne(req.body._id);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  getWithRole: async (req, res) => {
    try {
      const user = await UserModel.find({
        role: req.params.role,
      });
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
