const express = require('express');
const bodyParser = require('body-parser');
const addToDB = require('../DAL/link-manager').addToDB;

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.get('/:id', function(req, res) {
  res.send(`id: ${req.params.id} | user name: ${req.body.name}`);
});

usersRouter.post('/:id/links', function(req, res) {
  addToDB(req);
  res.sendStatus(200);
});

module.exports = usersRouter;
