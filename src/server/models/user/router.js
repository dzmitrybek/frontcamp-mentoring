const router = require('express').Router();
const userFacade = require('./model');

const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy(
    function(username, password, done) {
        userFacade.findOne({ username })
            .then((user) => {
                if (!user || password !== user.password) {
                    return done(null, false);
                }
                done(null, user)
            })
            .catch(done)
    }));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
    
passport.deserializeUser(function(id, done) {
    userFacade.findById(id)
        .then((user) => {
            done(null, user)
        })
        .catch(done)
});

router.route('/api/login')
    .post(
        passport.authenticate('local'),
        (req, res) => {
            res.status(200).json({userName: req.user.username});
        }
    );

router.route('/api/logout')
    .get((req, res) => {
        req.logout();
        res.sendStatus(200);
    });

router.route('/api/registration')
    .post((req, res, next) => {
        userFacade.findOne({ username: req.body.username })
            .then((user) => {
                if(user) {
                    throw new Error('User with this login already exists');
                }
                return userFacade.create(req.body);
            })
            .then((user) => {
                req.login(user, (err) => {
                    if(err) {
                        throw new Error('Auth Error');
                    }
                    res.status(200).json({userName: req.user.username});
                });
            })
            .catch(next);
    });

module.exports = router;