var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req, res, next) => {
  res.render('createlogin',{
    title: 'GS',
    pageheader: 'Create Account'
  })
})

router.post('/', (req, res, next) => {
  queries.submitAccount(req.body)
    .then(data=>{
      res.redirect('/loggedin');
    }).catch(err =>{
      console.log(err)
    })
})

router.get('/:id', (req, res, next) => {
  const id = req.params.id
  queries.getUsersCode(id)
    .then(data=>{
      res.json(data)
    }).catch(err =>{
      console.log(err)
    })
})

module.exports = router;
