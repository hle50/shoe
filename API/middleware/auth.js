var settings = require('./../config/settings');

module.exports  = function(){
  return {
    basicAuth: function(req, res, next){
      if(!req.headers || !req.headers.appkey || !req.headers.appsecret || req.headers.appkey !== settings.appKey
      || req.headers.appsecret !== settings.appSecret){
        res.status(400).send('Authorization failed');
      }
      next();
    }
  }
};
