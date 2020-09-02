var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
    name:String,
    surname:String,
    city:String,
    dist:String,
    type:Number, // 0 admin, 1 mağaza, 2 üye
    username: String,
    password: String,
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);