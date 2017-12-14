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

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
  // res.json(reservations);
  // res.json(waitingList);
});



// post
app.post("/newres", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newRes = req.body;
  
  //res won't have it's own page so we won't need dynamic routes to be added 
  //newres.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes);
  
  // this function puts the reservation information in the appropriate array.
  
  if(reservations.length > 3 ){
  	waitingList.push(newRes);
  }else{
  	reservations.push(newRes);
	
  };


  res.json(newRes);
});

var reservations = [
	{
		name: "Bob",
		phone: 867 + "-" + 5309,
		email: "bob@bob.email",
		id: 001
	}
]

var waitingList = [
	{
		name: "Todd",
		phone: 867 + "-" + 5310,
		email: "todd@todd.email",
		id: 002

	}
]

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});