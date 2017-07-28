const express = require('express');
const bodyParser = require('body-parser');

const takeFromDB = require('../DAL/link-manager').takeFromDB;
const takeAll = require('../DAL/link-manager').takeAll;

const linkRouter = express.Router();

linkRouter.use(bodyParser.json());

linkRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.send(data));
});

linkRouter.get('/', function(req, res) {
  takeAll().then(data => res.send(data));
});

module.exports = linkRouter;
