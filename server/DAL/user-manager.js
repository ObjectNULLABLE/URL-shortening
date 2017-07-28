const db = require('../DAL/connect-to-db');
const userModel = require('../DAL/shemas/user');

function addUser(userProps) {
  const user = new userModel({
    username: userProps.username,
    password: userProps.password
  });

  return user
    .save()
    .then(console.log(`New user ${user.username} have been created.`))
    .catch(err => {
      throw err;
    });
}

function getUser(userProps) {
  return userModel
    .findOne({ username: userProps.username })
    .exec()
    .then(user => {
      if (!user) {
        throw Error('user not found');
      } else if (user.password === userProps.password) {
        return user;
      } else {
        throw Error('bad password');
      }
    })
    .catch(err => {
      throw err;
    });
}

function updateUser() {}

function deleteUser(userID) {
  userModel.findByIdAndRemove(userID).exec().then().catch(err => {
    throw err;
  });
}

module.exports.addUser = addUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
