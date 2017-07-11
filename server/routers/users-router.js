const express = require('express');
const bodyParser = require('body-parser');
const addToDB = require('../DAL/link-manager').addToDB;
const deleteOne = require('../DAL/link-manager').deleteOne;

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.get('/:id', function(req, res) {
  res.send(`id: ${req.params.id} | user name: ${req.body.name}`);
});

usersRouter.post('/:id/links', function(req, res) {
  addToDB(req);
  res.sendStatus(200);
});

usersRouter.delete('/:id/links', function(req, res) {
  deleteOne(req);
  res.sendStatus(200);
});

module.exports = usersRouter;
