var express = require('express');
var router = express.Router();
var controller = require('./controler');
/* GET home page. */
router.get('/hello', controller.hello);
/**
 * @swagger
 * /warning/add:
 *   post:
 *     tags:
 *       - 30shine_warning
 *     description: warning
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: info about api want to schedule
 *         description: info about api want to schedule. (time_rules from www.freeformatter.com/cron-expression-generator-quartz.html)
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           example: {"dbConfig": "db159","sql": "Select count(*) from tbl_salon where id = 1;","compareValues":[1,2,3],"compareOperator": "greater", "compareType": "number", "sendType" : "slack","receivers":"","contentWarning":"", "scheduleRules":"* * * * * *", "description" : ""}
 *     responses:
 *       200:
 *         description: thành công.
 *       400:
 *         description: Bad request.
 *       403:
 *         description: Schedule is existed.
 *       500:
 *         description: Lỗi chưa được xác định
 *       503:
 *         description: Dịch vụ không sẵn dùng
 */
router.get('/bye', controller.byebye);

module.exports = router;
