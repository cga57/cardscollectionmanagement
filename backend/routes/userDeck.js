const express = require( 'express' );
const Deck = require( '../models/deck' ).Model;
const UserDeck = require("../models/userDeck").Model;
const router = express.Router();


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
