var mongoose   = require('mongoose');
var dbConnectionString = process.env.MB_MONGO_CONN;
mongoose.connect(dbConnectionString);
var User = require('./app/models/user');
module.exports = db;