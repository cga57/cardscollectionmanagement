const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const UserCard = require("./models/userCards");
port = 3081;

// code for authentication put here - eventually can be put into a seperate file

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
var testConnectionDb = mongoose.connection;
testConnectionDb.on("connected", () => {
  console.log("Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// this is for adding card to private card userbase
// here is where we
app.get("/addCardToUser", (req, res) => {
  res.send("App Works!");
});
// this is for adding card to public user database
app.post("/addCard", (req, res) => {
  const cardData = req.body;
  console.log("This is the data body: ", cardData);
  const newCard = new UserCard(cardData);

  newCard.save((error) => {
    if (error) {
      res.status(500).json({ msg: "Issue with saving card into database" });
    } else {
      res.json();
    }
  });
});
