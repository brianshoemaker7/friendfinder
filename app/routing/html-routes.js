// Sets the required package
var path = require("path");

// Here is where the paths are setup
module.exports = function(app){
	app.get('/home', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	})
	app.get('/profile', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/profile.html'))
	})
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	})

};
