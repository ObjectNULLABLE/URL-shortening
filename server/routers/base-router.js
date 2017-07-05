const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users-router');

const baseRouter = express.Router();

baseRouter.use(bodyParser.json());
baseRouter.use("/users", usersRouter);

baseRouter.post("/", function (req, res) {
    res.send(req.body.url_form);
});

module.exports = baseRouter;