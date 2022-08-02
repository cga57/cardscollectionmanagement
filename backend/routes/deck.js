const express = require( 'express' );
const Deck = require( '../models/deck' ).Model;
const UserDeck = require("../models/userDeck").Model;
const router = express.Router();


/********** deck api **********/


// retrieving a deck from the table
router.get( '/deck/:id', async( req, res ) =>
{
	console.log( 'Retrieving a deck from database...' );
	Deck.findById( req.params.id, ( err, deck ) => responseHandler( err, deck, res, 'retrieving' ) );
} );

// adding a deck to deck table
router.post( "/deck", async( req, res ) => 
{
	console.log( "Posting a new deck to database..." );

	const deckData = req.body;
	const newDeck = Deck( deckData );
	newDeck.save( ( err, deck ) => responseHandler( err, deck, res, 'adding' ) );
} );

// update a deck in the table
router.put( '/deck', async( req, res ) =>
{
	console.log( 'Updating a deck in database...' );

	const id = req.body._id;
	const deck = Deck( req.body );
	Deck.findByIdAndUpdate( id, deck, ( err, deck ) => responseHandler( err, deck, res, 'updating' ) );
} );

// delete a deck in the table
router.delete( '/deck/:id', async( req, res ) =>
{
	console.log( 'Deleting a deck from database...' );
	Deck.findByIdAndDelete( req.params.id, ( err, deck ) => responseHandler( err, deck, res, 'deleting' ) );
} );

// handle database api callback and respond to client
const responseHandler = ( error, doc, res, mode ) =>
{
	if( error )
	{
		console.log( error );
		res.status( 500 ).json( `Issue with ${ mode } deck in database` );
	}
	else
	{
		res.status( 200 ).json( doc );
	}
}


/********** user deck api **********/


// this is for adding a deck to user collection
router.post( "/userDeck", async( req, res ) => 
{
	console.log( "Posting a new user deck to database..." );

	const deckData = req.body;
	const newDeck = UserDeck( deckData );
	const assciatedDeck = await Deck.findById( newDeck.deck ).exec();

	if( assciatedDeck )
	{
		await newDeck.save( ( error, savedDeck ) =>
		{
			if( error ) 
			{
				console.log( error );
				res.status( 500 ).json( "Issue with saving user deck into database" );
			}
			else
			{
				res.status( 200 ).json( savedDeck._id );
			}
		});
	}
	else
	{
		res.status( 400 ).json( "The associated deck is not in database" );
	}
});


module.exports = router;
