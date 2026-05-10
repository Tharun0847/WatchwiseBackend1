require("dotenv").config();

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var userController = require("./routes/user.router")
var watchlistController = require("./routes/watchlist.router")
var analyticsRouter = require("./routes/analytics.router")

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 


app.use("/users", userController);
app.use("/watchlist",watchlistController)
app.use("/analytics", analyticsRouter)


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || 6767, () => {
  console.log("server running on", process.env.PORT);
});
