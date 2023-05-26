import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

import user from "./routes/user.js";
import project from "./routes/project.js";
import task from "./routes/task.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));

// app.use(cors());
const corsOptions ={
  origin:'*', 
  credentials:true,           
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/user", user);
app.use("/project", project);
app.use("/task", task);





async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/angularJs").then(() => {
      console.log("Connected!");
      app.listen(PORT, () => {
        console.log(`port dang chay la ${PORT}`);
      });
    });
  } catch (error) {
    console.log("connection failed");
  }
}
connect();