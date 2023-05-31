import {
  verifyTokenWithAdmin,
  verifyToken,
} from "../controllers/verifyToken.js";
import jwt from "jsonwebtoken";
import user from "./user.js";
import project from "./project.js";
import task from "./task.js";
import auth from "./auth.js";
import { UserModel } from "../models/User.js";

function router(app) {
  app.use("/user", user);
  app.use("/project", project);
  app.use("/task", task);
  app.use("/auth", auth);
}

export default router;
