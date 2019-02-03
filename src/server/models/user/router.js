const router = require('express').Router();
const User = require('./model');

const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy(
    function(username, password, done) {
        User.findOne({ username })
            .then((user) => {
                if (!user || password !== user.password) {
                    return done(null, false, { message: 'Incorrect username or password.' });
                }
                done(null, user)
            })
            .catch(done)
    }));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});
    
passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then((user) => {
            done(null, user)
        })
        .catch(done)
});

router.route('/api/login')
    .post(
        passport.authenticate('local'),
        (req, res) => {
            res.sendStatus(200);
        }
    );

router.route('/api/logout')
    .get((req, res) => {
        req.logout();
        res.sendStatus(200);
    });

router.route('/api/registration')
    .post(async (req, res, next) => {
        User.findOne({ username: req.body.username })
            .then((user) => {
                if(user) {
                    throw new Error('User with this login already exists');
                }
                return new User(req.body).save();
            })
            .then((user) => {
                req.login(user, (err) => {
                    if(err) {
                        throw new Error('Auth Error');
                    }
                    res.sendStatus(200);
                });
            })
            .catch(next);
    });

module.exports = router;