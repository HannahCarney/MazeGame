var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 3000

app.get('/', function(request, response){
  response.send("Welcome to the MazeGame")
});

server.listen(port, function(){
  console.log('running server on port' + port);
});

module.exports = server;