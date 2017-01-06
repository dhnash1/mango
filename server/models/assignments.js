var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Student_Name : {type: String, required : true },
    Assignment_name : String,
    Score: Number,
    Assignment_Name : String,
    Date_Completed : {type: Date, required : true}
});




var User = mongoose.model('assignments', userSchema);

module.exports = User;
