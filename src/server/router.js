const router = require('express').Router();

router.use('/',
    require('./models/user/router'),
    (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.sendStatus(401);
        }
});

router.use('/', require('./models/news/router'));

module.exports = router;