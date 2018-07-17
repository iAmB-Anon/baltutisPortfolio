// Dependencies
var express= require('express');
var bodyParser = require('body-parser');
var path = require('path');



var app = express();

// Setup app to use packages
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static('public'))

// index page 
app.get('/', function(req, res) {
  res.render('index');
});
app.get('/projects', function(req, res) {
  res.render('projects');
});
app.get('/contact', function(req, res) {
  res.render('contact');
});

var PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
