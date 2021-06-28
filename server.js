require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

const app = express();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

app.use(express.json());

app.use("/post", require("./routes/post"));
app.use("/user", require("./routes/user"));

app.listen(port, console.log(`express app running on port:${port}`));
