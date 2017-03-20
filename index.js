var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 2700;

if(!process.env.PORT) {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(bodyParser.json());



require('./routes.js')(app, express);

app.listen(port, function() {
  console.log('Listening on ' + port);
});

module.exports = {
  app: app,
};