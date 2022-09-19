const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const bookingSchema = new Schema({
    name:String,
    time:String,
    seats:Number,
    res_id:String,
    kuUser:String
})

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    isOwner:{
        type: String,
        default:"false",
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true
    },
    booking:[bookingSchema]
});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);