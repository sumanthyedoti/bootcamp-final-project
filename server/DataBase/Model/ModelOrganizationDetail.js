var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrganizationDetail = mongoose.model('organizationDetail', new Schema({
    name: {
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
    orgId: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength:2,
        maxlength:15,
        validate:{
            validator(orgId){
                return /^[a-zA-Z0-9_]{3,30}$/.test(orgId)
               },
               message:"orgId is incorrect formate"
        }
    },
    address: {   
        type: String,
        trim: true
    },
    logoPic: {
        type: String,
        trim: true
    },
    coverPic: {
        type: String,
        trim: true
    },
    about:{
       type:String,
       trim:true
    },
    Organisation: {
        type: String,
        trim: true
    },
    etdDate: {
        type: Date,
        trim: true
    },
    createdAt: {
        type: Date,
        trim: true,
        default:new Date()
    },
    founderDetails: {
        type:String,
        trim:true
    },
    memberIds:{
         type:Array
    },
    members:{
          type:Array,
        }
}, {versionKey: false}))

module.exports=OrganizationDetail;