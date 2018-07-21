var express = require('express');
var router = express.Router();
var controller = require('./controler');

/**
 * @swagger
 * /remove:
 *   post:
 *     tags:
 *       - Remove
 *     description: Remove
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Something 
 *         description: Something
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           example: {"input":"Xin chào đây là data test."}
 *     responses:
 *       200:
 *         description: thành công.
 */
router.post('/', controller.remove);

module.exports = router;
