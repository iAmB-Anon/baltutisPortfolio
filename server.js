// Dependencies
var express= require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

// Setup app to use packages
app.use(bodyParser.json());
app.set("view engine", "ejs");

// index page 
app.get('/', function(req, res) {
  res.render('index');
});

var PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
