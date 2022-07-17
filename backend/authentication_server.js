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
  // searh database to see if value exist

  if (applicationUser) {
    // valid login
    req.session.usr = applicationUser;
    res.send(`<a href="/session2"> NEXT PAGE </a>`);
  } else {
    // invalid - redirect them to login again TODO: write login logic
  }
});
