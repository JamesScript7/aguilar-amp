var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res) {
	res.send("you are home!");
});

app.listen(port, function() {
	console.log("ExpressJS started on port " + port);
});