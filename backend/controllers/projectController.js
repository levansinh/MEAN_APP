import { ProjectModel } from "../models/Project.js";

export const projectController = {
  //GET PROJECT
  getAll: async (req, res) => {
    try {
      const project = await ProjectModel.find();
      res.status(200).json({
        data: project,
        success: "success",
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    try {
      console.log(req.params.id);
      const project = await ProjectModel.findOne({ _id: req.params.id });
      res.status(200).json({
        data: project,
        success: "success",
      });
    } catch (error) {
      console.log(error);
    }
  },
  //ADD PROJECT
  create: async (req, res) => {
    try {
      const project = await new ProjectModel({
        name_leader: req.body.nameLeader,
        name_project: req.body.nameProject,
        team_size: req.body.teamSize,
      });
      const result = await project.save();
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  },
  //UPDATE PROJECT
  update: async (req, res) => {
    try {
      const result = await ProjectModel.updateOne(
        { _id: req.body.id },
        req.body
      );
      res.status(200).json({ message: "success", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  //DELETE PROJECT
  delete: async (req, res) => {
    ProjectModel.deleteOne({ _id: req.body.id });
  },
};
