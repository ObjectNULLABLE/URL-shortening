var mongoose = require('mongoose');

var linkSchema = mongoose.Schema(
  {
    url: { type: String, required: true },
    hash: { type: String, required: true },
    name: String,
    authorID: { type: String, required: true },
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
