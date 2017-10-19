var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req, res, next) => {
  res.render('createlogin',{
    title: 'GS - Create Account'
  })
})

router.post('/', (req, res, next) => {
  queries.submitAccount(req.body)
    .then(data=>{
      res.json(data)
    }).catch(err =>{
      console.log(err)
    })
})

router.post('/:id', (req, res, next) => {

})

module.exports = router;
