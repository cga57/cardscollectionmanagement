const express = require( 'express' );
const User = require("../models/user").Model;
const router = express.Router();


/********** user api **********/


// this is for adding a user to user collection
router.post( "/user", async( req, res ) => 
{
	console.log( "Registering a new user to db..." );

	const userData = req.body;
  const newUser = User(userData);
  newUser.save( ( err, user ) => responseHandler( err, user, res, 'adding' ) );

	
});

// handle database api callback and respond to client
const responseHandler = ( error, doc, res, mode ) =>
{
	if( error )
	{
		console.log( error );
		res.status( 500 ).json( `Issue with ${ mode } user in database` );
	}
	else
	{
		res.status( 200 ).json( doc );
	}
}



module.exports = router;
