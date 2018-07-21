var express = require('express');
var router = express.Router();
var controller = require('./controller');

var passport = require('passport');

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (obj, done) {
    // Users.findById(obj, done);
    done(null, obj);
});

router.use('/google', require('./google'));
// router.use('/facebook', require('./google'));
// router.use('/twitter', require('./google'));
// router.use('/', require('./local'));
router.get("/logout", controller.logout);
module.exports = router;