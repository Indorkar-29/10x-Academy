const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const marioModel = require("./models/marioChar");

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// your code goes here

// CREATE
app.post("/mario", async (req, res) => {
  try {
    const user = await marioModel.create(req.body);
    res.status(200).json({
      status: "success",
      result: user,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

// GET ALL
app.get("/mario", async (req, res) => {
  try {
    const users = await marioModel.find();
    res.status(200).json({
      status: "success",
      result: users,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

// GET BY ID
app.get("/mario/:id", async (req, res) => {
  try {
    const user = await marioModel.find({ _id: req.params });
    res.status(200).json({
      status: "success",
      result: user,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

// UPDATE
app.patch("/mario/:id", async (req, res) => {
  try {
    await Model.updateOne({ _id: req.params.id }, req.body);
    const user = await marioModel.find({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      result: user,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

// DELETE
app.delete("mario/:id", async (req, res) => {
  try {
    const user = await marioModel.find({ _id: req.params.id });
    await Model.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: "success",
      result: user,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
  }
});

module.exports = app;
