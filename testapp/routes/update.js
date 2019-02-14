var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  console.log(req.param('_id'));
  res.render('update', { title: 'update',vo:'{"_id":"1","id":"admin","pw":"1234"}' });
});

module.exports = router;
