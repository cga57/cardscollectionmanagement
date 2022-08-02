const express = require( 'express' );
const router = express.Router();
const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    console.log(file);
    // Store the file as the current date and the name of the files together
    // To ensure that each image name is unique
    cb(null, file.originalname)
  }
});

const upload = multer({storage: storage});


// fetch an image from disk
router.get( '/image', ( req, res ) =>
{
	res.send( 'hi' );
} );

// save an image into disk
router.post("/addImage", upload.single("deck-img"), (req, res) => {
  res.status(204);
  res.end();
});


module.exports = router;
