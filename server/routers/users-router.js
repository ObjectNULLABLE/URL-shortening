const express = require('express');
const bodyParser = require('body-parser');
const linksDal = require('../DAL/link-manager');

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.get('/:userId', function(req, res) {
  res.send(`id: ${req.params.id} | user name: ${req.body.name}`);
});

usersRouter.delete('/:userId', function(req, res) {}); //!

usersRouter.get('/userId/logout', function(req, res) {}); //!

usersRouter.post('/:userId/links', function(req, res) {
  linksDal.addToDB(req);
  res.sendStatus(200);
});

usersRouter.delete('/:userId/links', function(req, res) {
  linksDal.deleteOne(req);
  res.sendStatus(200);
});

usersRouter.put('/:userId/links', function(req, res) {
  linksDal.updateOne(req.body.id, req.body.newData);
  res.sendStatus(200);
});

module.exports = usersRouter;
