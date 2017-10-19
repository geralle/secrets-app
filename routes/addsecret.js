var express = require('express');
var router = express.Router();

const knex = require('../db/knex')
const queries = require('../db/query')

router.get('/', (req, res, next) => {
  queries.getAllUsers()
    .then(knowsusernames=>{
      res.render('addsecret',{
        title: 'GS',
        pageheader: 'Add a secret',
        knowsusernames: knowsusernames
      })
    })
})

router.post('/', (req, res, next) => {
  queries.submitSecret(req.body)
    .then(data=>{
      res.json(data)
    }).catch(err =>{
      console.log(err)
    })

})

module.exports = router;
