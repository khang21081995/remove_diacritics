var express = require('express');
var router = express.Router();

var swaggerJSDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var cf = require('../config');
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
    contact: {
      email: "khangpq.vn@gmail.com",
      phone: "0981604050"
    }
  },
  basePath: '/api',
  tags: cf.SWAGGER.APIS_TAG
};


var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: cf.SWAGGER.APIS_PATH
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);

router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {
  //   title: 'Express'
  // });
  res.redirect('/swagger');
});

router.get('/test', (req, res) => {
  res.render('test');
});

module.exports = router;