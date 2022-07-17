const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority"
// );
// var test = mongoose.connection;

mongoose.connect(
  "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "cardsCollectionApplication",
  }
);
var testConnectionDb = mongoose.connection;
testConnectionDb.on("connected", () => {
  console.log("Connected");
});

var Schema = mongoose.Schema;

var UserDeckSchema = new Schema({
  // user_id: { type: mongoose.ObjectId}, // reference to user to avoid large array
  // deck: { type: mongoose.ObjectId, require: true }, // reference to deck to reduce document size

  storage: { type: String }, // where did you put your deck
  cost: { type: Number }, // how much did you buy the deck
  additional_notes: { type: String }, // extra info like condition, seal number, etc
});

var UserDeck = mongoose.model("user_cards", UserDeckSchema);

// exports
module.exports.Schema = UserDeckSchema;
module.exports.Model = UserDeck;
