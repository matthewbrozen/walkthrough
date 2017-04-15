//required dependencies
var compression = require('compression');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//required routes
var routes = require('./routes/index');
var patients = require('./routes/patient');
var allergyintolerances = require('./routes/allergyintolerance');
var prescriptions = require('./routes/prescription');
var observations = require('./routes/observation');
var conditions = require('./routes/condition');
var procedures = require('./routes/procedure');
var immunizations = require('./routes/immunization');
var familymemberhistorys = require('./routes/familymemberhistory');
var dispenses = require('./routes/dispense');
var studys = require('./routes/study');
var researchers = require('./routes/researcher');
var realpatients = require('./routes/realpatient');


//declaring express
var app = express();
app.use(compression());

//database connection deployed and local
var db = process.env.MONGODB_URI || 'mongodb://localhost:27017/chromoapi'
mongoose.connect(db)
mongoose.Promise = global.Promise

//allow cors declared below
app.use(allowCors);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app uses setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//server routing
app.use('/', routes);
app.use('/patients', patients);
app.use('/allergyintolerances', allergyintolerances);
app.use('/prescriptions', prescriptions);
app.use('/observations', observations);
app.use('/conditions', conditions);
app.use('/procedures', procedures);
app.use('/immunizations', immunizations);
app.use('/familymemberhistorys', familymemberhistorys);
app.use('/dispenses', dispenses);
app.use('/studys', studys);
app.use('/researchers', researchers);
app.use('/realpatients', realpatients);

//cors header function
function allowCors(req, res, next) {
  res.header('Access-Control-Allow-Origin',  '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  // Handle "preflight" requests.
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
