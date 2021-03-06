'use strict';

module.exports = {
  render: function (req, res, object) {
    res.setHeader('Content-disposition', 'attachment; filename=' + object.fileName);
    res.setHeader('Content-type', object.contentType);
    object.stream.pipe(res);
  },
  error: function (req, res, object) {
    res.setHeader('Content-disposition', 'attachment; filename=' + object.fileName);
    res.setHeader('Content-type', object.contentType);
    res.status(500);
    object.stream.pipe(res);
  }
}

