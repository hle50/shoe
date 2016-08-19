var processor = require('../processor')();
var shoeService = require('../services/shoes');


var searchShoes = function (req, res) {
  var shoesSearchResult = shoeService.searchShoes(req.query);
  processor.render(req, res, shoesSearchResult);
};
module.exports = {
  searchShoes: searchShoes
};
