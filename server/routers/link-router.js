const express = require('express');
const bodyParser = require('body-parser');

const takeFromDB = require('../DAL/link-manager').takeFromDB;
const createUser = require('../DAL/user-manager').addUser;

const linkRouter = express.Router();

linkRouter.use(bodyParser.json());

linkRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.send(data));
});

module.exports = linkRouter;
