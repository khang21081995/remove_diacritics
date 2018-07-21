var express = require('express');
var router = express.Router();

// router.use('/template', require('./template'));
// router.use('/auth', require('./auth'));
// router.use('/upload', require('./uploadFile'));
router.use('/remove', require('./characterprocess'));
module.exports = router;