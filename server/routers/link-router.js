const express = require('express');
const bodyParser = require('body-parser');

const takeFromDB = require('../DAL/link-manager').takeFromDB;

const linkRouter = express.Router();

linkRouter.use(bodyParser.json());

linkRouter.get('/links/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.send(data));
});

linkRouter.get('/:hash', function(req, res) {
  takeFromDB('hash', req.params.hash).then(data => res.send(data.url));
});

linkRouter.post('/:hash', function(req, res) {});

module.exports = linkRouter;
