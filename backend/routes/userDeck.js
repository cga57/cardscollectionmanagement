const express = require( 'express' );
const Deck = require( '../models/deck' ).Model;
const UserDeck = require("../models/userDeck").Model;
const router = express.Router();


// retrieve an user deck from user collection
router.get( '/userDeck/:id', async( req, res ) =>
{
	console.log( 'Retrieving an user deck from database...' );
	UserDeck.findById( req.params.id, ( err, deck ) => responseHandler( err, deck, res, 'retrieving' ) );
} );

// this is for adding an user deck to user collection
router.post( "/userDeck", async( req, res ) => 
{
	console.log( "Posting a new user deck to database..." );

	const data = req.body;
	const userDeck = UserDeck( data[0] );

	// need to add new deck as well
	if( data.length === 2 )
	{
		console.log( "Posting a new deck to database..." );

		const deck = Deck( data[1] );
		deck.save( ( err, deck ) =>
		{
			if( err )
			{
				console.log( err );
				res.status( 500 ).json( `Issue with adding deck in database` );
			}
			else
			{
				userDeck.deck = deck._id;
				userDeck.save( ( err, deck ) => responseHandler( err, deck, res, 'adding' ) );
			}
		} );
	}
	else if( data.length === 1 )
	{
		userDeck.save( ( err, deck ) => responseHandler( err, deck, res, 'adding' ) );
	}
});

// update an user deck in user collection
router.put( '/userDeck', async( req, res ) =>
{
	console.log( 'Updating an user deck in database...' );

	const id = req.body._id;
	const deck = UserDeck( req.body );
	UserDeck.findByIdAndUpdate( id, deck, ( err, deck ) => responseHandler( err, deck, res, 'updating' ) );
} );

// delete an user deck from user collection
router.delete( '/userDeck/:id', async( req, res ) =>
{
	console.log( 'Deleting an user deck from database...' );
	const userDeck = await UserDeck.findById( req.params.id ).exec();
	const assciatedDeck = await Deck.findById( userDeck.deck ).exec();
	
	if( assciatedDeck && !assciatedDeck.isPublic )
	{
		console.log( 'Deleting a deck from database...' );
		Deck.findByIdAndDelete( assciatedDeck._id, ( err, deck ) =>
		{
			if( err )
			{
				console.log( err );
				res.status( 500 ).json( 'Issue with deleting deck in database' );
			}
			else
			{
				UserDeck.findByIdAndDelete( userDeck._id, ( err, deck ) => responseHandler( err, deck, res, 'deleting' ) );
			}
		} );
	}
	else
	{
		UserDeck.findByIdAndDelete( userDeck._id, ( err, deck ) => responseHandler( err, deck, res, 'deleting' ) );
	}
} );

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
