const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link-shema');

function addToDB(req) {
  const link = new linkModel({
    url: req.body.url
  });
  return link.save(function(err, link) {
    if (err) return console.error(err);
    console.log(`url: ${link.url} have been saved`);
  });
}

module.exports = addToDB;
