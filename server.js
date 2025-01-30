import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import galleryRoutes from "./routes/galleryRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const MONGO_DB = process.env.MONGODB_URL;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, console.log(`express app running on port:${PORT}`));

app.use("/gallery", galleryRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(MONGO_DB)
  .then(() => console.log("mongodb connected"))
  .catch((e) => console.log(e));
