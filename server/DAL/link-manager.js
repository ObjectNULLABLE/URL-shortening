const fnv = require('fnv-plus');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link');

function addToDB(req, res) {
  const hash = fnv.hash(req.body.url).str();

  const link = new linkModel({
    url: req.body.url,
    hash: hash,
    name: req.body.name,
    authorID: req.user.id, //TODO check user.id|user._id
    tags: req.body.tags
  });

  return link
    .exec()
    .save()
    .then(function() {
      console.log(`Link: ${link.url} have been saved with hash: ${link.hash}`);
      res.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}

function takeFromDB(key, value) {
  return linkModel
    .find({ [key]: value })
    .exec()
    .then(links => links)
    .catch(err => err);
}

function takeAllByTag(tag) {
  return linkModel
    .find({
      tags: tag
    })
    .exec()
    .then(links => {
      console.log(`Find: ${links}`);
      return links;
    })
    .catch(err => {
      throw err;
    });
}

function deleteOne(req, res) {
  return linkModel
    .findByIdAndRemove(req.body.id)
    .exec()
    .then(function() {
      console.log(`Link have been deleted`);
      res.sendStatus(202);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
}

function updateOne(id, newData) {
  return linkModel.findByIdAndUpdate(id, newData, { new: true }).exec().then();
}

module.exports.addToDB = addToDB;
module.exports.takeFromDB = takeFromDB;
module.exports.takeAllByTag = takeAllByTag;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;
