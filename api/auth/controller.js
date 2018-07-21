function isAcceptedUser(req) {
    var loginUser = req.user;
    var provider = req.provider;
    console.log({loginUser});
    if (!loginUser || !provider) {
        return false;
    }
    return true;
}


function OnLoginSuccess(req, res) {
    if (isAcceptedUser(req)) {
        //code check user is accept???
        res.redirect('/swagger');
    } else {
        logout(req, res);
    }

}

function logout(req, res) {
    console.log("Logout");
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}

module.exports = {
    OnLoginSuccess: OnLoginSuccess,
    logout: logout
};