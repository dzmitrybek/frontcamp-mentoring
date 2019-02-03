const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const passport = require('passport');

const config = require('./config');

mongoose.Promise = Promise;

mongoose.connect(config.mongodb.connectionUrl, { useNewUrlParser: true });

app.use(morgan('dev'));

app.use(express.static('public'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'SECRET', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);

app.use(errorHandler);

app.listen(config.server.port, function () {
    console.log(`Example app listening on port ${config.server.port}!`);
});

function errorHandler (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({ errorMessage: err.message})
  }