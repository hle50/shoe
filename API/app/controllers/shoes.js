var processor = require('../processor')();
var Shoes = require('../models/shoes');
var _ = require('lodash');
var shoeService = require('../services/shoes')(Shoes);


var searchShoes = function (req, res) {
  var shoesSearchResult = shoeService.searchShoes(req.query, function (err, results) {
    if (err) {
      return res.status(500).send();
    } else {
      processor.render(req, res, results);
    }
  });
};
var createNew = function (req, res) {
  var shoeData = req.body;
  shoeData.createdDate = new Date();
  shoeData.viewsCount = 0;
  shoeData.votes = 0;

  var result = Shoes.create(shoeData, function (err, resp) {
    if (err) {
      var errMsgs = _.map(err.errors, 'message');
      processor.error(req, res, errMsgs);
      return;
    }
    processor.render(req, res, resp);
  });

};
var getNewest = function (req, res) {
  Shoes.find().sort('-createdDate')
    .limit(6)
    .exec(function (err, resp) {
      if (err) {
        res.status(500).send();
      }
      processor.render(req, res, resp);
    });
};
module.exports = {
  searchShoes: searchShoes,
  createNew: createNew,
  getNewest: getNewest
};
