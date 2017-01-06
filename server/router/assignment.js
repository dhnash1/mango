var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/assignments');


router.post("/post", function(req , res){
  console.log(req.body.thing);
  var math = req.body.thing * 5;
  res.send({thingy: math});
});


module.exports = router;
