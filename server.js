var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan = require('morgan');
var router = require('./router');
var db = require('./connectiondb');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', router);

var port = process.env.PORT || 5000;
app.listen(port);
console.log('Magic happens on port' + port);
