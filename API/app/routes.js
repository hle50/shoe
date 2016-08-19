var controllers = require('./controllers/index');
var auth = require('./auth');

module.exports = function (app) {
  /**
   * @swagger
   * resourcePath: /shoes
   * description: All about API
   */

  /**
   * @swagger
   * path: /shoes/all
   * operations:
   *   -  httpMethod: GET
   *      summary: Get all shoes
   *      notes: Return list shoes
   *      responseClass: Shoes
   *      nickname: login
   *      consumes:
   *        - text/html
   *      parameters:
   *        - name: keyword
   *          description: search by keyword
   *          paramType: query
   *          required: false
   *          dataType: string
   *        - name: skip
   *          description: Skip
   *          paramType: query
   *          required: false
   *          dataType: number
   *        - name: take
   *          description: take
   *          paramType: query
   *          required: false
   *          dataType: number
   */
  app.get('/shoes/all', auth.basicAuth, controllers.shoes.searchShoes);
};
