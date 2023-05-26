import { TaskModel } from "../models/Task.js";

export const taskController = {
    //GET TASK
    getAllProject: async (req, res) => {
    try {
      const task = await TaskModel.find();
      console.log(task);
      res.status(200).json(task);
    } catch (error) {
      console.log(error);
    }
  },
  //ADD TASK
  createTask: async (req, res) => {
    try {
      console.log(req.body);
      const task = new TaskModel(req.body);
      console.log(task);
      task.save();
    } catch (error) {
      console.log(error);
    }
  },
};
