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
  shoeData.lastUpdated = new Date();
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
var updateShoe = function (req, res) {
  if (!req.query.id) {
    processor.error(req, res, 'id is required');
    return;
  }
  var shoeData = req.body;
  Shoes.findOneAndUpdate({_id: req.query.id},  {$set: {name: 'abcd'}}, {runValidators: true}, function(error) {
    // The update validator throws an error:
    // "TypeError: Cannot read property 'toLowerCase' of undefined",
    // because `this` is **not** the document being updated when using
    // update validators
    debugger;
  });
  // Shoes.update({_id: req.query.id}, shoeData, {
  //   multi: false,
  //   runValidators: true
  // }, function(err, resp){
  //   debugger;
  // });

};
var deleteShoe = function (req, res) {
  if (!req.query.id) {
    processor.error(req, res, 'id is required');
    return;
  }
  Shoes.remove({
    _id: req.query.id
  }, function (err, resp) {
    if (err) {
      return;
    }
    processor.render(req, res);
  })
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
  getNewest: getNewest,
  deleteShoe: deleteShoe,
  updateShoe: updateShoe
};
