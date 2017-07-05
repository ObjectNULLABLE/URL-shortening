const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.get('/:id', function (req, res) {
  res.send(`id: ${req.params.id} | user name: ${req.body.name}`);
});

module.exports = usersRouter;