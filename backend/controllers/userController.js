import { UserModel } from "../models/User.js";
import md5 from "md5";
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
  getOneUser: async (req, res) => {
    try {
      const user = await UserModel.findOne(req.body._id);
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  getAllLeader: async (req, res) => {
    try {
      const user = await UserModel.find(req.body.role);
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
  getAllStaff: async (req, res) => {
    try {
      const user = await UserModel.find(req.body.role);
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  },
};
