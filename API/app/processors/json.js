'use strict';

module.exports.render = function(req, res, object) {
  var data = {
    data: object
  };
  res.send(JSON.stringify(data));
};
