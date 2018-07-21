'use strict';
var express = require('express');
var controller = require('./controller.js');
var passport = require('passport');
var router = express.Router();
//post to api/auth/idtoken with json like: "id_token" : "abcxyzt"
var GoogleTokenStrategy = require('passport-google-id-token');
var passport = require('passport');
var configGoogleServer = require('../config').googleClient;
passport.use(new GoogleTokenStrategy({
        clientID: configGoogleServer.clientID
        // ,getGoogleCerts: optionalCustomGetGoogleCerts
    },
    function (parsedToken, googleId, done) {
        //id_token
        console.log({
            parsedToken
        });
        console.log({
            googleId
        });
        if (parsedToken.payload)
            return done(null, {
                parsedToken: parsedToken,
                googleId: googleId
            });
        else return done(new Error("Invalid parse token!!!"), {
            parsedToken: parsedToken,
            googleId: googleId
        });
    }
));


/***************************** api/auth/idtoken  *****************************/

//id_token need this key
router.post('/', passport.authenticate('google-id-token'), controller.doAuthen);
router.post('/not', controller.doAuthen);

module.exports = router;