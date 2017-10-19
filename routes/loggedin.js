var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req,res,next) =>{
  res.render('loggedin',{
    title: 'GS',
    pageheader: 'Secrets',
    username: 'username'
  })
})

router.get('/:user_code', (req, res, next) => {
  queries.loggedIn(req.params.user_code)
    .then(code =>{
      // res.render('loggedin',{
      //   title: 'GS',
      //   pageheader: 'Secrets'
      // })
    })
})

module.exports = router;
