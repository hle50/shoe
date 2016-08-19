var _ = require('lodash');
var shoes = require('./shoes.json');
module.exports =  {
  searchShoes: function (query) {
    var list = _.filter(shoes, function (shoe) {
      return _.find(['shoeName', 'seller', 'description'], function (key) {
        return shoe[key].toUpperCase().indexOf((query.keyword || '').toUpperCase()) >= 0;
      });
    });
    return {
      totalCount: list.length,
      list: list.splice(query.skip || 0, query.take || 10)
    };
  }
};
