// Package and port setup

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 80;

// Express Stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Route requirements
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Port where we're listening
app.listen(PORT, function() {
	console.log("Server listening on PORT: " + PORT);
});