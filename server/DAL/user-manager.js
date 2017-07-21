const jwt = require('jsonwebtoken');

const db = require('../DAL/connect-to-db');
const userModel = require('../DAL/shemas/user');
const jwtKey = require('../tools/auth-strategy').key;

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

function checkUserAndSendToken(req, res) {
  if (req.body.username && req.body.password) {
    const username = req.body.username;
    const password = req.body.password;

    const user = userModel.findOne({ username: username }).exec().then(user => {
      if (!user) {
        res.status(401).json({ message: 'no such user found' });
      }

      if (user.password === req.body.password) {
        var payload = {
          id: user._id,
          username: username
        };
        //яТебяЛюблю.Очень
        var token = jwt.sign(payload, jwtKey);

        res.json({ message: 'ok', token: token, username: username });
      } else {
        res.status(401).json({ message: 'passwords did not match' });
      }
    });
  }
}

function updateUser() {}

function deleteUser() {}

module.exports.addUser = addUser;
module.exports.checkUserAndSendToken = checkUserAndSendToken;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
