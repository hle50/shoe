var processor = require('../processor')();
var Shoes = require('../models/shoes');
var shoeService = require('../services/shoes')(Shoes);



var searchShoes = function (req, res) {
  var shoesSearchResult = shoeService.searchShoes(req.query, function(err, results){
    if (err) {
      return res.status(500).send();
    }else{
      processor.render(req, res, results);
    }
  });
};
module.exports = {
  searchShoes: searchShoes
};
