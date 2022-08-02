const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const UserSchema = new Schema
( {
	email: { type: String, require: true, unique: true },
	password: { type: String, require: true },
	name: { type: String, require: true }, 							// what do we call the user
} );

var UserModel = mongoose.model( "User", UserSchema );

// exports
module.exports.Schema = UserSchema;
module.exports.Model = UserModel;
