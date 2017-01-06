var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/assignments');


router.post("/", function(req , res){
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

router.get('/', function(req, res){
  User.find({}, function(err, userResults){
    if(err){
      console.log("BROKEN GET");
    }else{
      console.log("sending", userResults);
      res.send(userResults);
    }
  });
});


module.exports = router;
