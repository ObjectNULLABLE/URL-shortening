const fnv = require('fnv-plus');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link');

function addToDB(linkProps, authorID) {
  const hash = fnv.hash(linkProps.url).str();
  const tags = linkProps.tags.split(", ");

  const link = new linkModel({
    url: linkProps.url,
    hash: hash,
    name: linkProps.name,
    authorID: authorID,
    tags: tags
  });

  return link
    .save()
    .then(function() {
      console.log(`Link: ${link.url} have been saved with hash: ${link.hash}`);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

function takeAll() {
  return linkModel
    .find({})
    .exec()
    .then(links => {
      return links;
    })
    .catch(err => err);
}

function takeFromDB(key, value) {
  return linkModel
    .find({ [key]: value })
    .exec()
    .then(links => {
      return links;
    })
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

function deleteOne(linkID) {
  return linkModel.findByIdAndRemove(linkID).exec().then().catch(err => {
    throw err;
  });
}

function updateOne(id, newData) {
  return linkModel.findByIdAndUpdate(id, newData, { new: true }).exec().then();
}

module.exports.addToDB = addToDB;
module.exports.takeAll = takeAll;
module.exports.takeFromDB = takeFromDB;
module.exports.takeAllByTag = takeAllByTag;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;
