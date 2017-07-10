var mongoose = require('mongoose');

var linkSchema = mongoose.Schema(
  {
    url: String,
    hash: String,
    name: String,
    author: String,
    tags: [String],
    transitions: {
      type: Number,
      default: 0
    }
  },
  {
    versionKey: false
  }
);

const link = mongoose.model('link', linkSchema);

module.exports = link;
