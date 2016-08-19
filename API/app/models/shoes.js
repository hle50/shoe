var db = require('../../db/db');
var Schema = db.Schema;
var shoesSchema = new Schema({
  name: String,
  branch: String,
  price: Number,
  createdDate: Date,
  viewsCount: Number,
  votes: Number,
  imageUrl: String
});
module.exports = db.model('Shoes', shoesSchema);
