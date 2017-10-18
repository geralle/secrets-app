var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req, res, next) =>{
  res.render('index',{
    title: 'Galvanize Secrets'
  })
})

module.exports = router;
