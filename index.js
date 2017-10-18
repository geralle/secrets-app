var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('navigate to /cartoon');
});

module.exports = router;
