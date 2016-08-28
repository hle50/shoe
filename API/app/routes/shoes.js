var express = require('express');
var app = express();
var auth = require('./../auth');
var controllers = require('./../controllers/index');

var shoeRouters = express.Router();
shoeRouters.route('/')
  .get(auth.basicAuth, controllers.shoes.searchShoes)
  .put(auth.basicAuth, controllers.shoes.updateShoe)
  .post(auth.basicAuth, controllers.shoes.createNew)
  .delete(auth.basicAuth, controllers.shoes.deleteShoe);
module.exports = shoeRouters;
