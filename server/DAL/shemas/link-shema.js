var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
  url: String,
  transitions: {
    type: Number,
    default: 0
  }
});

const link = mongoose.model('link', linkSchema);

module.exports = link;
