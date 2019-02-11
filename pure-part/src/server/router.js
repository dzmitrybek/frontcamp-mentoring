const router = require('express').Router();
const userRouter = require('./models/user/router');
const newsRouter = require('./models/news/router')

router.use('/',
    userRouter,
    (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.sendStatus(401);
        }
});

router.use('/', newsRouter);

module.exports = router;