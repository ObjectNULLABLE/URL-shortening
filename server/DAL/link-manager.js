const fnv = require('fnv-plus');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link-shema');

function addToDB(req) {
  const hash = fnv.hash(req.body.url).str();
  const link = new linkModel({
    url: req.body.url,
    hash: hash,
    name: req.body.name,
    author: req.params.id //check that, when complit users
  });

  return link.save(function(err, link) {
    if (err) return console.error(err);
    console.log(`url: ${link.url} have been saved with ${link.hash} hash`);
  });
}

function takeFromDB(req) {
  return linkModel
    .findOne({ hash: req.params.hash })
    .exec()
    .then(link => link.url)
    .catch(err => err);
}

module.exports.addToDB = addToDB;
module.exports.takeFromDB = takeFromDB;
