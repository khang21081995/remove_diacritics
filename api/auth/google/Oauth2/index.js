var express = require('express');
var router = express.Router();
var controller = require('./controller');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configGoogleServer = require('../config').googleClient;


passport.use(new GoogleStrategy(
    configGoogleServer,
    function (accessToken, refreshToken, profile, done) {
        done(null, {
            profile: profile,
            refreshToken: refreshToken,
            accessToken: accessToken
        });
    }
));


/***************************** api/auth/google  *****************************/

router.get('/callback', passport.authenticate('google', {
    failureRedirect: '/api/auth/google/Oauth2/fail',
    successRedirect: '/api/auth/google/Oauth2/success'
}));

router.get('/login', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/plus.me',
        'https://www.googleapis.com/auth/plus.login',
        'https://www.googleapis.com/auth/plus.profile.emails.read'
    ]
}));
router.get('/success', controller.loginSuccess);
router.get('/fail', controller.loginFail);

module.exports = router;