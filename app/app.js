var express = require('express'),
 path = require('path'),
 favicon = require('static-favicon'),
 logger = require('morgan'),
 cookieParser = require('cookie-parser'),
 bodyParser = require('body-parser'),
 passport = require('passport'),
 session = require('express-session'),
 expressValidator = require('express-validator');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.locals.pretty = true;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
 
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(expressValidator());
app.use(session({secret: 'i am not a cat'}))
app.use(passport.initialize());
app.use(passport.session());

var bookshelf = require('./utils/dbconfig')();

app.set('bookshelf',bookshelf)

require('./utils/authorization')(app,passport)
require('./utils/routehandler')(app)

require('./utils/errorhandler')(app)

module.exports = app;
