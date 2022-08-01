const express = require( 'express' );
const Deck = require( '../models/deck' ).Model;
const UserDeck = require("../models/userDeck").Model;
const router = express.Router();

router.get("/addDeckToUser", (req, res) => {
	res.send("Add Deck Works!");
});

// this is for adding a deck to deck table
router.post( "/deck", async( req, res ) => 
{
	console.log( "Posting a new deck to database..." );

	const deckData = req.body;
	const newDeck = Deck( deckData );

	await newDeck.save( ( error, savedDeck ) => 
	{
		if( error ) 
		{
			console.log( error );
			res.status( 500 ).json( "Issue with saving deck into database" );
			//res.json( "Issue with saving deck into database" );
		}
		else
		{
			//console.log( 'working' );
			//res.json( 'working' );
			res.status( 200 ).json( savedDeck._id );
		}
	});
});


// this is for adding a deck to user collection
router.post( "/userDeck", async( req, res ) => 
{
	console.log( "Posting a new user deck to database..." );

	const deckData = req.body;
	const newDeck = UserDeck( deckData );

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
});


module.exports = router;
