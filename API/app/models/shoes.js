var db = require('../../db/db');
var Schema = db.Schema;
var shoesSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is Required'],
  },
  branch: {
    type: String,
    required: [true, 'Branch is Required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price is invalid']
  },
  createdDate: Date,
  lastUpdated: Date,
  viewsCount: Number,
  votes: Number,
  imageUrl: String
}, {strict: true});
module.exports = db.model('Shoes', shoesSchema);
