var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 3001

server.listen(port, function(){
  console.log('running server on port' + port);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.render('index')
});



// app.get('/greetings', function(request, response){
//   response.render('greeting', { name: "Spike" });
// });


module.exports = server;