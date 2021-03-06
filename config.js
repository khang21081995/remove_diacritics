var config = {
  MONGO_DATABASE_USERNAME: "admin",
  MONGO_DATABASE_PASSWORD: "admin",
  MONGO_DATABASE_URL: "@ds135760.mlab.com:35760/30shine_dev",
  APP_SECRET_KEY: "Khang.Pham",
  SWAGGER: {
    APIS_PATH: ['./api/characterprocess/*.js'],
    APIS_TAG: [{
      name: "Remove",
      description: "Remove apis"
    }]
  },
  BASE_URL: "quangkhang.com",
  TYPE: "http",
  PORT: "28828",
  PORT_DEV: "3000",
  getRootUrl: getRootUrl,
  getPort: getPort
};



function getRootUrl() {
  var url = config.BASE_URL;
  var port = getPort();
  var httpType = config.TYPE;
  return httpType + "://" + url + ":" + port;
}

function getPort() {
  return config.PORT;
}

module.exports = config;