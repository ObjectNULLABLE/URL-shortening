const express = require('express');
const bodyParser = require('body-parser');
const db = require('../DAL/connect-to-db');
const linkModel = require('../DAL/shemas/link-shema');

const linkRouter = express.Router();

linkRouter.use(bodyParser.json());

linkRouter.get('/:hash', function(req, res) {});

linkRouter.post('/:hash', function(req, res) {
  res.send(`Link: ${req.body.link} | Link hash: ${req.params.hash}`);
});

module.exports = linkRouter;
