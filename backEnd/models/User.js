const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
 email: {
    type: String
  },
  password: {
    type: String
  },
  created_date:{
    type: Date,
    default: Date.now
  },
  updated_date:{
    type: Date,
    default: Date.now
  }

}, {
    collection: 'user'
  })

module.exports = mongoose.model('User', userSchema)