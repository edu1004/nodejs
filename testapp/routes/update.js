var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');

var Emp = mongoose.model('Emp');
router.get('/', function(req, res, next) {
  console.log(req.param('_id'));
  Emp.find({_id:req.param('_id')}, function(err, vos) {
       console.log(JSON.stringify(vos));
       //res.render('list', { title: 'list' ,datas:JSON.stringify(vos)});
       res.render('update', { title: 'update',vo:JSON.stringify(vos[0]) });
  });

});

module.exports = router;
