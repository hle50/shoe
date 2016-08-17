
var swagger = require('swagger-express');
module.exports = function(app){
  app.use(swagger.init(app, {
    apiVersion: '1.0',
    swaggerVersion: '1.0',
    swaggerURL: '/swagger',
    swaggerJSON: '/api-docs.json',
    swaggerUI: './swagger/ui/',
    basePath: 'http://localhost:3000',
    info: {
      title: 'swagger-express sample app',
      description: 'Swagger + Express = {swagger-express}'
    },
    apis: ['./server.js'],
    middleware: function(req, res){}
  }))
};
