var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var session = require('express-session');
var config = require("./config.js");
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var log = require('./utils/logger');

var passport = require('passport');
/****************************** Mongo DB  ******************************/
var db_username = config.MONGO_DATABASE_USERNAME;
var db_password = config.MONGO_DATABASE_PASSWORD;
var db_url = config.MONGO_DATABASE_URL;
var connection_string = "mongodb://" + db_username + ":" + db_password + db_url;
mongoose.connect(connection_string, {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', function (err) {
    log.error(err);
});
db.once('open', function () {
    log.info("DB connection success! ");
});


/****************************** App  ******************************/

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static(path.resolve(__dirname, 'public')));

app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(cookieParser(config.APP_SECRET_KEY, {
    maxAge: 60 * 60 * 1000 * 24
}));


app.use(session({
    secret: config.APP_SECRET_KEY,
    name: 'KhangPQ',
    // store: new RedisStore({
    //     host: config.REDIS_HOST,
    //     port: config.REDIS_PORT,
    //     pass:config.MONGO_DATABASE_PASSWORD
    // }),
    cookie: {
        maxAge: 60 * 60 * 1000 * 24 //1 day
    },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        clear_interval: 3600
    }), // Store session
    proxy: true,
    resave: true,
    saveUninitialized: true,
}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));
app.use('/api', require('./api'));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    log.error(err);
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;