import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

import storyRoutes from "./routes/storyRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`express app running on port:${PORT}`));

app.use("/story", storyRoutes);
app.use("/author", authorRoutes);

mongoose
  .connect(MONGODB_URL)
  .catch((e) => console.log(e.message))
  .finally(() => console.log("mongodb connected"));
