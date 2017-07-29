const express = require('express');
const bodyParser = require('body-parser');
const linksDAL = require('../DAL/link-manager');

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.get('/current', function(req, res) {
  res.send(`id: ${req.user._id} | user name: ${req.user.username}`);
});

usersRouter.delete('/current', function(req, res) {}); //!

usersRouter.get('/current/logout', function(req, res) {
  res.redirect('/'); //delete token on client
});

usersRouter.get('/current/links', function(req, res) {
  const userID = req.user.id;
  linksDAL.takeFromDB('authorID', userID).then(links => res.send(links));
});

usersRouter.post('/current/links', function(req, res) {
  try {
    linksDAL.addToDB(req.body, req.user._id);
    res.sendStatus('201');
  } catch (error) {
    res.sendStatus(500);
    console.log(error.message);
  }
});

usersRouter.delete('/current/links', function(req, res) {
  try {
    linksDAL.deleteOne(req.body.linkID);
    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(500);
    console.log(error.message);
  }
});

usersRouter.put('/current/links', function(req, res) {
  linksDAL.updateOne(req.body.id, req.body.newData);
  res.sendStatus(200);
});

module.exports = usersRouter;
