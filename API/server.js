/**
 * Created by hoale on 3/13/2016.
 */

var express = require('express');
var app = express();
var util = require('./util/util');
var auth = require('./middleware/auth')();
var shoesSampleData = require('./data/shoes.json');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var shoesService = require('./services/shoes')(shoesSampleData);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/shoes', auth.basicAuth, function (req, res) {
  var shoesSearchResult = shoesService.searchShoes(req.query);
  res.send(util.modelToResult(shoesSearchResult));
});

app.listen(PORT, function () {
  console.log('Express is running on ' + PORT);
});
