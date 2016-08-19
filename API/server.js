/**
 * Created by hoale on 3/13/2016.
 */

var express = require('express');
var app = express();
var swagger = require('./swagger/config')(app);
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var routes = require('./app/routes')(app);

app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(PORT, function () {
  console.log('Express is running on ' + PORT);
});
