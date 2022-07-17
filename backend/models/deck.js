const mongoose = require( "mongoose" );
const BrandSchema = require( 'models/brand' ).Schema;

const Schema = mongoose.Schema;

const DeckSchema = new Schema
( {
	name: { type: String, require: true },
	edition: { type: String, require: true },
	image: { type: Buffer }, 						// not sure if Buffer is the correct type for image
	date_of_issue: { type: Date },
	stock: { type: String },
	finish: { type: String },
	print_run: { type: Number },
	retail_price: { type: Number },
	manufacturer: { type: String },

	// use embedding model for fast read speed and document doesn't change often
	brand: { type: BrandSchema },
} );

var DeckModel = mongoose.model( "Deck", DeckSchema );

// exports
module.exports.schema = DeckSchema;
module.exports.model = DeckModel;