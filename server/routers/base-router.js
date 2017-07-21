const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./users-router');
const linkRouter = require('./link-router');
const takeFromDB = require('../DAL/link-manager').takeFromDB;
const userDAL = require('../DAL/user-manager');
const pasport = require('../tools/auth-strategy').passport;

const baseRouter = express.Router();

baseRouter.use(bodyParser.json());

baseRouter.use(
  '/users',
  pasport.authenticate('jwt', { session: false }),
  usersRouter
);

baseRouter.use('/links', linkRouter);

baseRouter.post('/register', function(req, res) {
  userDAL.addUser(req);
  userDAL.checkUserAndSendToken(req, res);
});

baseRouter.post('/login', function(req, res) {
  userDAL.checkUserAndSendToken(req, res);
});

//have to be used in last turn!!!
baseRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.redirect(data.url));
});

module.exports = baseRouter;
