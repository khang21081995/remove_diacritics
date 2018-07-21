module.exports = {
    doAuthen: function (req, res) {
        var user = req.user;
        console.log({
            user
        });
        res.json({
            message: "Hello"
        });
    }
};