var removeDiacritics = require('diacritics').remove;
var ASCIIFolder = require("fold-to-ascii");

function remove(req, res, next) {
    var input = req.body.input || "";
    var output = removeDiacritics(ASCIIFolder.fold(input));
    res.json({
        output: output
    });
}

module.exports = {
    remove
}