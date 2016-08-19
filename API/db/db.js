var mongoose = require('mongoose');
var config = require('./../config/settings');
mongoose.connect(config.mongoConnectString);

module.exports = mongoose;
