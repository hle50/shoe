'use strict';

module.exports.render = function(req, res, object) {
  res.send(JSON.stringify(object));
};
