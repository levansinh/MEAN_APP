import { ProjectModel } from "../models/Project.js";

export const projectController = {
    //GET PROJECT
  getAllProject: async (req, res) => {
    try {
      const project = await ProjectModel.find();
      console.log(project);
      res.status(200).json(project);
    } catch (error) {
      console.log(error);
    }
  },
  //ADD PROJECT
  createProject: async (req, res) => {
    try {
      console.log(req.body);
      const project = new ProjectModel(req.body);
      console.log(project);
      project.save();
    } catch (error) {
      console.log(error);
    }
  },
};
