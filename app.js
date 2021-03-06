const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

const index = require('./routes/index')
const createlogin = require('./routes/createlogin')
const loggedin = require('./routes/loggedin')
const addsecret = require('./routes/addsecret')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index)
app.use('/createlogin', createlogin)
app.use('/loggedin', loggedin)
app.use('/addsecret', addsecret)

app.listen(port, data =>{
  console.log("listening on... http://localhost:"+port)
})

module.exports = app;
