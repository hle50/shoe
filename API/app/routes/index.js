var shoes = require('./shoes');
module.exports = function (app) {
  app.use('/shoes', shoes);
};
