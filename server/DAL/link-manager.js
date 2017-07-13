const fnv = require('fnv-plus');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link');

function addToDB(req) {
  const hash = fnv.hash(req.body.url).str();

  const link = new linkModel({
    url: req.body.url,
    hash: hash,
    name: req.body.name,
    author: req.params.id //check that, when complete users
  });

  return link
    .exec()
    .save()
    .then(function() {
      console.log(`Link: ${link.url} have been saved with hash: ${link.hash}`);
    })
    .catch(err => err);
}

function takeFromDB(key, value) {
  return linkModel
    .findOne({ [key]: value })
    .exec()
    .then(link => link)
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

function updateOne(id, newData) {
  return linkModel.findByIdAndUpdate(id, newData, { new: true }).exec().then();
}

module.exports.addToDB = addToDB;
module.exports.takeFromDB = takeFromDB;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;
