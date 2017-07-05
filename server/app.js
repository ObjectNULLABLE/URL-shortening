const express = require('express');
const baseRouter = require("./routers/base-router");

const app = express();
const port = 8080;
const adress = "127.0.0.1";

app.use("/", baseRouter);

app.listen(port, function (req, res) {
    console.log(`Server started on port ${port}, on adress ${adress}`);
});

module.exports = app;