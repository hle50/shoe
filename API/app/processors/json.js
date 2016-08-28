'use strict';

module.exports = {
  render: function (req, res, object) {
    var data = {
      data: object,
      status: true
    };
    res.send(JSON.stringify(data));
  },
  error: function (req, res, object) {
    var data = {
      errors: object,
      status: false
    };
    res.status(500).send(JSON.stringify(data));
  }
}
