'use strict';

module.exports = {
    loginSuccess: function (req, res) {
        console.log("Login success");
        // console.log(req);
        req.provider = "google.oauth2";
        require('../../controller').OnLoginSuccess(req, res);
    },
    loginFail: function (req, res) {
        console.log("Login fail");
        res.redirect("/api/auth/logout");
    }
};