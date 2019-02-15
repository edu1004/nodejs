var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');

var Emp = mongoose.model('Emp');

router.get('/', function(req, res, next) {
  Emp.find({}, function(err, vos) {
       console.log(JSON.stringify(vos));
       res.render('list', { title: 'list' ,datas:JSON.stringify(vos)});
  });
  
});

module.exports = router;
