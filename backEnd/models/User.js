const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

},
  {
    timestamps: true
  }, {
  collection: 'user'
})

module.exports = mongoose.model('User', userSchema)