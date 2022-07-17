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
  deck: { type: JSON, require: true }
});

var UserDeck = mongoose.model("User_cards", UserDeckSchema);

// exports
module.exports.Schema = UserDeckSchema;
module.exports.Model = UserDeck;
