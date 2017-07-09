const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users-router');
const linkRouter = require('./link-router');

const baseRouter = express.Router();

baseRouter.use("/users", usersRouter);

baseRouter.use("/", linkRouter); //have to be used in last turn!!!

module.exports = baseRouter;