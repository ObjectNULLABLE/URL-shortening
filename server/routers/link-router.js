const express = require('express');
const bodyParser = require('body-parser');

const takeFromDB = require('../DAL/link-manager').takeFromDB;

const linkRouter = express.Router();

linkRouter.use(bodyParser.json());

linkRouter.get('/:hash', function(req, res) {
  const gotLink = takeFromDB(req).then(data => res.send(data));
});

linkRouter.post('/:hash', function(req, res) {});

module.exports = linkRouter;
