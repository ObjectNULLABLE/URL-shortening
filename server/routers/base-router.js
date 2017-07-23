const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const usersRouter = require('./users-router');
const linkRouter = require('./link-router');
const takeFromDB = require('../DAL/link-manager').takeFromDB;
const userDAL = require('../DAL/user-manager');
const pasport = require('../tools/authentication').passport;
const jwtSecret = require('../tools/auth-strategy').secret;

const baseRouter = express.Router();

baseRouter.use(bodyParser.json());

baseRouter.use(
  '/users',
  pasport.authenticate('jwt', { session: false }),
  usersRouter
);

baseRouter.use('/links', linkRouter);

baseRouter.post('/register', function(req, res) {
  userDAL.addUser({ ...req.body });
  checkUserAndSendToken(req, res);
});

baseRouter.post('/login', function(req, res) {
  checkUserAndSendToken(req, res);
});

//have to be used in last turn!!!
baseRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.redirect(data.url));
});

function checkUserAndSendToken(req, res) {
  userDAL
    .getUser({ ...req.body })
    .exec()
    .then(user => {
      var payload = {
        id: user._id,
        username: user.username
      };
      var token = jwt.sign(payload, jwtSecret);
      res.json({ message: ok, token: token });
    })
    .catch(error => {
      if (
        error.message === 'user not found' ||
        error.message === 'bad password'
      ) {
        res.status(401).json({ message: error.message });
      } else {
        console.log(error.name + ' | ' + error.message);
      }
    });
}

module.exports = baseRouter;
