import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log(`express app running on port:${PORT}`));
