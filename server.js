// requires
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// global vars
var app = express();
var PORT = 3000;

// parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Get all characters
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

