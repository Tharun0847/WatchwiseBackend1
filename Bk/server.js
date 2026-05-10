require("dotenv").config();

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var userController = require("./routes/user.router")
var connectDB = require("./db");
connectDB();

 


app.use("/users", userController);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 6767, () => {
  console.log("server running on", process.env.PORT);
});
