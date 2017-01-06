var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/assignments');


router.post("/post", function(req , res){
  var info = req.body;
  console.log(info);
  var newAssign = new User({
    Student_Name : info.name,
    Assignment_name : info.assign,
    Score: info.score,
    Date_Completed : info.date
});

newAssign.save(function(err){
if(err){
  console.log("damn, broken post");
}else{
  console.log("added");
  res.send("put together");
}

});


  });



module.exports = router;
