const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const UserDeck = require("./models/userDeck").Model;
port = 3081;

// code for authentication put here - eventually can be put into a seperate file

const deckUsers = [];

// mongoDB connection
mongoose.connect(
  "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var testConnectionDb = mongoose.connection;
testConnectionDb.on("connected", () => {
  console.log("Connected");
});

// serve frontend application
app.get("/", (req, res) => {
  res.send("App Works!");
});

// listening for port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/addDeckToUser", (req, res) => {
  res.send("Add Deck Works!");
});

// this is for adding deck to private user database
app.post("/api/addDeck", (req, res) => {
  const deckData = req.body;
  console.log("Post call read in server! ");
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

app.get("/api/weirdstring", (req, res) => {
  res.send("weirdstring");
});
