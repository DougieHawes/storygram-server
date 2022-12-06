require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const mongodb = process.env.MONGODB_URL;
const port = process.env.PORT;

const app = express();

app.use(cors());

app.listen(port, () => console.log(`express server running on port:${port}`));

app.use("/user", require("./routes/user"));
app.use("/post", require("./routes/post"));

mongoose.connect(mongodb, () => console.log("mongodb connected"));
