const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

const config = require('./config');

mongoose.Promise = Promise;

mongoose.connect(config.mongodb.connectionUrl, { useNewUrlParser: true })
    .then(() => console.log('successful database connection'))
    .catch((err) => console.error('connection error', err));

app.use(morgan('dev'));

app.use(express.static('dist'));

app.use(bodyParser.json());

app.use(router);

app.use(errorHandler);

app.listen(config.server.port, function () {
    console.log(`Example app listening on port ${config.server.port}!`);
});

function errorHandler (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({ errorMessage: err.message})
  }