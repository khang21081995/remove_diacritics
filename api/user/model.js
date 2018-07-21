'use strict';

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var model = new Schema({

});

// user.plugin(findOrCreate);

model.pre('save', function (next) {
    return next();
});


module.exports = mongoose.model('User', model);