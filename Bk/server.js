require("dotenv").config();

var express = require("express");
var app = express();
var mongoose = require("mongoose");


connectDB();


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 6767, () => {
  console.log("server running on", process.env.PORT);
});
