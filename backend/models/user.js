const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const UserSchema = new Schema
( {
	// login credentials (not sure if we need to store it here if we use passport.js for auth)
	email: { type: String, require: true, unique: true },
	password: { type: String, require: true },

	name: { type: String, require: true }, 							// what do we call the user
	user_type: { type: String, require: true }, 					// regular or admin
} );

var UserModel = mongoose.model( "User", UserSchema );

// exports
module.exports.Schema = UserSchema;
module.exports.Model = UserModel;
