const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

const index = require('./routes/index')
const createlogin = require('./routes/createlogin')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/createlogin', createlogin)

app.listen(port, data =>{
  console.log("listening on... http://localhost:"+port)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
