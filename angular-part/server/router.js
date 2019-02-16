const router = require('express').Router();
const newsRouter = require('./models/news/router')

router.use('/', newsRouter);

module.exports = router;