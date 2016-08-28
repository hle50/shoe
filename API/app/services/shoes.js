var _ = require('lodash');
var shoes = require('./shoes.json');
module.exports = function (Shoes) {
  return {
    searchShoes: function (query, cb) {
      Shoes.find({},  cb);
    }
  }
};
