const express = require("express");

const app = express.Router();

const auth = require("./api/auth");

app.get("/", (req, res) => {
  res.json("Welcome to lulz api");
});

app.use("/auth", auth);

module.exports = app;
