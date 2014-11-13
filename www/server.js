
var envKey = process.env.NODE_ENV || "local";
var environments = {
	local: {
		port: 8888
	},
	heroku: {
		port: 80
	}
};
environments.development = environments.local; 

var env = environments[envKey];
var express = require('express');

var app = express();
app.use('/', express.static(__dirname + '/'));
app.get('/*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

env.port = process.env.PORT || env.port;

var http = require("http");
http.createServer(app).listen(env.port);

console.log("App running for the '%s' environment on port %s", envKey, env.port);