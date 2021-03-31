const mongoose = require('mongoose');
const momentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tags: {
    type: [],
    required: true
  },
  multiple_image: {
    type: [],
    required: true
  }
}, {
  timestamps: true
}, {
  collection: "moment"
})
module.exports = mongoose.model('moment', momentSchema)