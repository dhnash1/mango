var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userRouter = require('./router/assignment');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var mongoURI = "mongodb://localhost:27017/PeerMongoose";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});


app.listen("2020", function(){
  console.log("Listening");
});



app.use('/router', userRouter);

app.use( express.static( "public" ));
