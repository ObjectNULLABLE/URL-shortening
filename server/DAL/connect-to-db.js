var mongoose = require('mongoose');
var user = require('./shemas/user-shema');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:')); //!!
db.once('open', function () {
  console.log('Connected to database.');
});

module.exports = db;