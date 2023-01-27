const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const dataModel = require("./model/messageModel");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.post("/del", async (req, res) => {
  try {
    const del = new dataModel(req.body);
    await del.save();
    res.status(201).send(del);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
