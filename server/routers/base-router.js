const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const usersRouter = require('./users-router');
const linkRouter = require('./link-router');
const takeFromDB = require('../DAL/link-manager').takeFromDB;
const addUser = require('../DAL/user-manager').addUser;
const getUser = require('../DAL/user-manager').getUser;
const pasport = require('../tools/authentication').passport;
const jwtSecret = require('../tools/authentication').secret;

const baseRouter = express.Router();

baseRouter.use(bodyParser.json());

baseRouter.use(
  '/users',
  pasport.authenticate('jwt', { session: false }),
  usersRouter
);

baseRouter.use('/links', linkRouter);

baseRouter.post('/register', function(req, res) {
  addUser(req.body);
  checkUserAndSendToken(req, res);
});

baseRouter.post('/login', function(req, res) {
  checkUserAndSendToken(req, res);
});

//have to be used in last turn!!!
baseRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => {
    data[0].url ? res.redirect(data[0].url) : res.sendStatus(404);
  });
});

function checkUserAndSendToken(req, res) {
  getUser(req.body)
    .then(user => {
      var payload = {
        id: user._id,
        username: user.username
      };
      var token = jwt.sign(payload, jwtSecret);
      res.json({ userID: user._id, username: user.username, token: token });
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
