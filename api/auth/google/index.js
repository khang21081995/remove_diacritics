var express = require('express');
var router = express.Router();

router.use('/Oauth2', require('./Oauth2'));
router.use('/IdToken', require('./IdToken'));

module.exports = router;