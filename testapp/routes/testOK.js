var express = require('express');
var router = express.Router();
var mdb = require('./mongoose.js');
var empSchema = mongoose.Schema({
  id: String,
  pw: String
}, {
    versionKey: false
});
var Emp = mongoose.model('Emp', empSchema);
router.post('/', function(req, res, next) {
  console.log(req.param('id'));
  console.log(req.param('pw'));


  //.......
  //emps로 테이블 생성(예:dept >> depts) 후 데이터 저장
    var e = new Emp({id:req.param('id'),pw:req.param('pw')});
    e.save().then((product) =>{
       console.log('Save Resolved : ', product);
       res.redirect('/list');
    }, (err) =>{
       console.log('Save Rejected : ', err);
       res.redirect('/test');
    });



});

module.exports = router;
