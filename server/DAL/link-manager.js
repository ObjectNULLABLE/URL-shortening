const fnv = require('fnv-plus');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link');

function addToDB(req) {
  const hash = fnv.hash(req.body.url).str();

  const link = new linkModel({
    url: req.body.url,
    hash: hash,
    name: req.body.name,
    author: req.params.id //check that, when complit users
  });

  return link
    .exec()
    .save()
    .then(function() {
      console.log(`Link: ${link.url} have been saved with hash: ${link.hash}`);
    })
    .catch(err => err);
}

function takeFromDB(req) {
  return linkModel
    .findOne({ hash: req.params.hash })
    .exec()
    .then(link => link.url)
    .catch(err => err);
}

function deleteOne(req) {
  return linkModel
    .remove({ hash: req.body.hash })
    .exec()
    .then(function() {
      console.log(`Link have been deleted`);
    })
    .catch(err => err);
}

module.exports.addToDB = addToDB;
module.exports.takeFromDB = takeFromDB;
module.exports.deleteOne = deleteOne;
