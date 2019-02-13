var mongoose = require('mongoose');
var Schema = mongoose.Schema;
////************ User Detail ************************ */
var userDetail = mongoose.model('userDetail', new Schema({
    Name: {
        type: String,
        trim: true,
        required: true,
        minlength:3,
        maxlength:30,
        validate:{
            validator(Name){
             return /^[a-zA-Z ]{3,30}$/.test(Name)
            },
            message:"name is incorrect format"
        }
    },
    Username: {
        type: String,
        trim: true,
        minlength:2,
        maxlength:15,
        unique: true,
        required: true,
        validate:{
            validator(Name){
                return /^[a-z0-9A-Z_]{3,30}$/.test(Name)
               },
               message:"username is incorrect format"
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        validate: {
            validator(email) {
              return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
            },
            message: 'Email is not Correct',
          }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength:8,
        maxlength:16
    },
    profilePic: {
        type: String,
        trim: true
    },
    Coverpic: {
        type: String,
        trim: true
    },
    DOB: {
        type: Date,
        trim: true,
        required: true
    },
    followers:{
        type:Array,
        default:new Array()
    },
    gender:{
        type:String,
        trim:true,
        required:true,
        validate:{
              validator(gender){
                    return /^male$|^female$|^other$/.test(gender);
               },
               message:"Gender is not correct"
        }
    },
    createdAt: {
        type: Date,
        trim: true,
        default:new Date(),
        required: true
    },
    organization: {
        type: Array,
        trim: true
    }
}, {versionKey: false}))

module.exports=userDetail;