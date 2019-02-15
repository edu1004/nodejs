var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');

var Emp = mongoose.model('Emp');
router.post('/', function(req, res, next) {
  console.log(req.param('_id'));
  console.log(req.param('id'));
  console.log(req.param('pw'));
  Emp.findOne({_id:req.param('_id')}).exec(function(err, doc) {
      if ( doc ) {
         doc.id = req.param('id');
         doc.pw = req.param('pw');
         doc.save(function(err, product) {
           if (product) {
             console.log('Modify and Save : ', product);
             res.redirect('/list');
           }
         });
      }else{
        console.log('Modify Rejected : ', err);
        res.redirect('/update?_id='+req.param('_id'));
      }
   });

});

module.exports = router;
