// Used this as a reference for help with authentication:  https://www.youtube.com/watch?v=TDe7DRYK8vU

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const deckRoute = require( './routes/deck' );
const userDeckRoute = require('./routes/userDeck');
const userRoute = require('./routes/user')
const imageRoute = require( './routes/image' );
const session = require("express-session");
const MongoDBSession = require("connect-mongodb-session")(session);
const User = require("./models/user").Model;
const bcrypt = require('bcryptjs')


const app = express();
port = 3081;

// code for authentication put here - eventually can be put into a seperate file

const deckUsers = [];
const uri = "mongodb+srv://ash:finalproject@cluster0.ilz0p.mongodb.net/cardsCollectionApplication?retryWrites=true&w=majority";
// mongoDB connection
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var testConnectionDb = mongoose.connection;
testConnectionDb.on("connected", () => {
  console.log("Connected");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static("dist/cardessory"));
app.use(express.json());
app.use( '/api', deckRoute );
app.use('/api', userDeckRoute);
app.use('/api', userRoute);

const authenticationStorage = new MongoDBSession({
  uri: uri,
  collection: "sessions",
});

app.use(
  session({
    name: "session",
    secret: "qqq",
    resave: false,
    maxAge: 60 * 60 * 1000, // 60 minutes
    saveUninitialized: true,
    store: authenticationStorage

  })
);

// passed into /api/login
const auth = (req, res, next) => { 
  if (req.session.isAuth) {
    next()
  } else {
    // req.redirect('login')
  }
}
app.use( '/api', userRoute );
app.use( '/api', imageRoute );

// serve frontend application
app.get("/", (req, res) => {
  console.log(req.session.id)
  res.send("App Works!");
});

// listening for port
app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});


app.get("/api/login",auth,async (req, res) => {
  // ask db if this is a valid applicationUser based on req.body
  applicationUser = req.body;
  email = applicationUser.email
  const activeUser = await User.findOne({ email })
  if (!activeUser) {
    // return res.redirect("/login")
  } 
  const check = await bcrypt.compare(activeUser.password, password)
  if (!check) {
    // return res.redirect("/login")
  }
  req.session.isAuth = true;
  // return res.redirect("/mainPortal")
  });
