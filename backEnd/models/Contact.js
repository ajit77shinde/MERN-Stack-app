const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
  
}, {
    collection: 'contact'
  })

module.exports = mongoose.model('Contact', contactSchema)