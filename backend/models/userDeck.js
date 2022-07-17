const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/?retryWrites=true&w=majority"
// );
// var test = mongoose.connection;

var Schema = mongoose.Schema;

var userDeckSchema = new Schema({
  username: { type: String },
  condition: { type: Boolean },
  storage: { type: Number },
  additional_notes: { type: String },
  cost: { type: Number },
});

var UserDeck = mongoose.model("UserDeck", userDeckSchema);

// exports
module.exports.schema = userDeckSchema;
module.exports.model = UserDeck;
