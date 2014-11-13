
var envKey = process.env.NODE_ENV || "local";
var env = {
	local: {
		port: 8888
	},
	heroku: {
		port: 80
	}
}[envKey]; 

var express = require('express');

var app = express();
app.use('/', express.static(__dirname + '/'));
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

var http = require("http");
http.createServer(app).listen(env.port);

console.log("App running for the '%s' environment on port %s", envKey, env.port);