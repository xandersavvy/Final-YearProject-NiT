const express = require("express");

const app = express.Router();

const api = require("./api");

app.get("/", (req, res) => {
  res.json("Welcome to lulz");
});

app.use("/api", api);

module.exports = app;
