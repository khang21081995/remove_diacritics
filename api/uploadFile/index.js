var express = require('express');
var router = express.Router();
var controller = require('./controller');
router.post('/', controller.uploadMedia);

module.exports = router;