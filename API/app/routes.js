var controllers = require('./controllers/index');
var auth = require('./auth');

module.exports = function (app) {
  app.get('/shoes/list', auth.basicAuth, controllers.shoes.searchShoes);
  app.post('/shoes/create', auth.basicAuth, controllers.shoes.createNew);
  app.get('/shoes/news', auth.basicAuth, controllers.shoes.getNewest);
};
