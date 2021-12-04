const express = require("express");
const {
  CheckUserNamePassword,
  RegisterNewUser,
} = require("../../helpers/Users");

const app = express.Router();

let currentUser = null;

app.post("/register", (req, res) => {
  const { Username, Password, Name, Email, Type } = req.body;
  if (
    typeof Username == "string" &&
    typeof Password == "string" &&
    typeof Name == "string" &&
    typeof Email == "string" &&
    typeof Type == "string"
  ) {
    //Call register function
    if (RegisterNewUser(Username, Password, Name, Email, Type)) {
      res.status(201).json({
        Message: "User created successfully",
      });
    } else {
      res.status(409).json({
        Error: "Username already exists",
      });
    }
  } else {
    res.status(400).json({
      Error: "All fields are mandatory",
    });
  }
});

app.get("/login", (req, res) => {
  if (currentUser) {
    res.json(currentUser);
  } else {
    res.status(400).json({
      Error: "Not logged in",
    });
  }
});
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  const username = Username.toString();
  const password = Password.toString();
  if (!Username || !Password) {
    res.status(401).json({
      Error: "Username or Password is wrong",
    });
  } else {
    switch (CheckUserNamePassword(Username, Password)) {
      case 0:
        res.status(404).json({
          Error: "User does not exist",
        });
        currentUser = null;
        break;
      case -1:
        res.status(400).json({
          Error: "Invalid Username or Password",
        });
        currentUser = null;
        break;
      default:
        currentUser = CheckUserNamePassword(Username, Password);
        res.json(currentUser);
    }
  }
});

app.post("/logout", (req, res) => {
  currentUser = null;

  res.status(204).json({ Message: "User logged out successfully" });
});

module.exports = app;
