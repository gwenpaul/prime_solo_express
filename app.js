var express = require('express');
var path = require('path');
var Random = require('./modules/returnrandom.js');
var Convert = require('./modules/convert.js');
var thirdmodule = require('./modules/thirdmodule.js');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/static', function(requ, res, next) {
  res.sendFile('./static/styles.css');
});

app.get('/static', function(requ, res, next) {
  res.sendFile('./static/scripts.js');
});

app.get('/balance', function(req, res, next) {
  res.send(thirdmodule.poo + thirdmodule.foo);
});

var server = app.listen(process.env.PORT || 3000, function() {
  var host = this.address().address;
  var port = this.address().port;
  console.log('Sever is listening at http://%s:%s', host, port);
});
