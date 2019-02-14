var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('list', { title: 'LIST',datas:'[{"_id":"1","id":"amdin","pw":"1234"},{"_id":"2","id":"amdin2","pw":"2222"}]' });
});

module.exports = router;
