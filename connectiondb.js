var mongoose   = require('mongoose');
var dbConnectionString = process.env.MB_MONGO_CONN;
var db = mongoose.connect(dbConnectionString);
var User = require('./models/user');
module.exports = db;