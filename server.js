const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
port = 3081;

const cardsUsers = [];

app.get("/", (req, res) => {
  res.send("App Works!");
});
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
mongoose.connect(
  "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority"
);
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected");
});
