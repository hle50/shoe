/**
 * Created by hoale on 3/13/2016.
 */

var express = require('express');
var app = express();
var swagger = require('./swagger/config')(app);
var util = require('./util/util');
var auth = require('./middleware/auth')();
var shoesSampleData = require('./data/shoes.json');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var shoesService = require('./services/shoes')(shoesSampleData);
app.use(bodyParser.urlencoded({
  extended: true
}));
/**
 * @swagger
 * resourcePath: /shoes
 * description: All about API
 */

/**
 * @swagger
 * path: /shoes/all
 * operations:
 *   -  httpMethod: GET
 *      summary: Get all shoes
 *      notes: Return list shoes
 *      responseClass: Shoes
 *      nickname: login
 *      consumes:
 *        - text/html
 *      parameters:
 *        - name: keyword
 *          description: search by keyword
 *          paramType: query
 *          required: false
 *          dataType: string
 *        - name: skip
 *          description: Skip
 *          paramType: query
 *          required: false
 *          dataType: number
 *        - name: skip
 *          description: Skip
 *          paramType: query
 *          required: false
 *          dataType: number
 */
app.get('/shoes/all', auth.basicAuth, function (req, res) {
  var shoesSearchResult = shoesService.searchShoes(req.query);
  res.send(util.modelToResult(shoesSearchResult));
});

app.listen(PORT, function () {
  console.log('Express is running on ' + PORT);
});
