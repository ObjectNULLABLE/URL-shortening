var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:')); //!!
db.once('open', function() {
  console.log('Connected to database.');
});

module.exports = db;
