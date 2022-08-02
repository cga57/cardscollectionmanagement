const express = require( 'express' );
const Deck = require( '../models/deck' ).Model;
const UserDeck = require("../models/userDeck").Model;
const router = express.Router();


/********** user deck api **********/

// retrie a deck from table
router.get( '/userDeck/:id', async( req, res ) =>
{
	console.log( 'Retrieving an user deck from database...' );
	UserDeck.findById( req.params.id, ( err, deck ) => responseHandler( err, deck, res, 'retrieving' ) );
} );

// this is for adding a deck to user collection
router.post( "/userDeck", async( req, res ) => 
{
	console.log( "Posting a new user deck to database..." );

	const deckData = req.body;
	const newDeck = UserDeck( deckData );
	const assciatedDeck = await Deck.findById( newDeck.deck ).exec();

	if( assciatedDeck )
	{
		newDeck.save( ( err, deck ) => responseHandler( err, deck, res, 'adding' ) );
	}
	else
	{
		res.status( 400 ).json( "The associated deck is not in database" );
	}
});

// handle database api callback and respond to client
const responseHandler = ( error, doc, res, mode ) =>
{
	if( error )
	{
		console.log( error );
		res.status( 500 ).json( `Issue with ${ mode } user deck in database` );
	}
	else
	{
		res.status( 200 ).json( doc );
	}
}

module.exports = router;
