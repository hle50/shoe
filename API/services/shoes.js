var _ = require('lodash');
module.exports = function(shoes){
  return {
    searchShoes: function(query){
      var list = _.filter(shoes, function(shoe){
        return _.find(['shoeName','seller','description'], function(key){
          return shoe[key].toUpperCase().indexOf(query.keyword.toUpperCase())>=0;
        });
      });
      return {
        totalCount: list.length,
        query: query,
        list: list.splice(query.skip || 0, query.take || 10)
      };
    }
  }
};
