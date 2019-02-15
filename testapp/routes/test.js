var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  console.log(next);
  res.render('test', { title: 'test',user:{name:"kim"} });
});

module.exports = router;
