const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users-router');
const linkRouter = require('./link-router');

const baseRouter = express.Router();

baseRouter.use('/users', usersRouter);

baseRouter.use('/links', linkRouter);

linkRouter.post('/register', function(req, res) {
  createUser(req);
  res.sendStatus(200);
});
//have to be used in last turn!!!
linkRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.redirect(data.url));
});

module.exports = baseRouter;
