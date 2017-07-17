const db = require('../DAL/connect-to-db');
const userModel = require('../DAL/shemas/user');

function addUser(req) {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password
  });

  return user
    .save()
    .then(console.log(`New user ${user.username} have been created.`))
    .catch(err => err);
}

function checkUser() {}

function updateUser() {}

function deleteUser() {}

module.exports.addUser = addUser;
module.exports.checkUser = checkUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
