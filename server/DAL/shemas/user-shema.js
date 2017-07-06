var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  pass: String
});

const user = mongoose.model('user', userSchema);

module.exports = user;