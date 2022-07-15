const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "https://data.mongodb-api.com/app/data-udxjr/endpoint/data/v1"
);
var db = mongoose.connection;

const app = express();
port = 3081;

const cardsUsers = [];
