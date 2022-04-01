import express from "express";
const app = express();
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

import userRoutes from "./api/routes/users.js";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USERNAME +
    ":" +
    process.env.DB_PASSWORD +
    "@formvalidation.9ye7s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use("/users", userRoutes);

export default app;
