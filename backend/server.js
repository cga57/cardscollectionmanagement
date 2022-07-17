const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const UserDeck = require("./models/userDeck").model;
port = 3081;

// code for authentication put here - eventually can be put into a seperate file

const deckUsers = [];

app.get("/", (req, res) => {
  res.send("App Works!");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect(
  "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority"
);
var testConnectionDb = mongoose.connection;
testConnectionDb.on("connected", () => {
  console.log("Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this is for adding deck to private deck userbase
// here is where we
app.get("/addDeckToUser", (req, res) => {
  res.send("Add Deck Works!");
});
// this is for adding deck to public user database
app.post("/addDeck", (req, res) => {
  const deckData = req.body;
  console.log("This is the data body: ", deckData);
  const newDeck = new UserDeck(deckData);

  newDeck.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Issue with saving deck into database" });
    } else {
      res.json();
    }
  });
});