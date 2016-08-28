/**
 * Created by hoale on 3/13/2016.
 */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));


var routes = require('./app/routes/index')(app);

app.listen(PORT, function () {
  console.log('Express is running on ' + PORT);
});
