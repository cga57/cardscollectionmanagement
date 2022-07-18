const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// used in class example to help code this

var session = require("express-session");

app.use(
  session({
    name: "session",
    secret: "qqq",
    resave: false,
    maxAge: 60 * 60 * 1000, // 60 minutes
  })
);

app.get("/session1", (req, res) => {
  // ask db if this is a valid applicationUser based on req.body
  applicationUser = req.body;
  // currently implemented as such that all users are valid

  if (applicationUser) {
    // valid login
    req.session.usr = applicationUser;
    console.log("Authenticated!");
    res.send(`<a href="/session2"> NEXT PAGE </a>`);
  } else {
    // invalid - redirect them to login again
    // currently all logins are valid atm
    // eventually plan to only implement logins that are not found in the users database
  }
});
