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
            message:"name is incoreect formate"
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
                return /^[a-z0-9_]{3,30}$/.test(Name)
               },
               message:"name is incoreect formate"
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
    gender:{
        type:String,
        trim:true,
        required:true,
        validate:{
              validator(gender){
                    return /^male$|^female$|^other$/.test('other');
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