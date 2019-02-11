var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrganizationDetail = mongoose.model('organizationDetail', new Schema({
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
    organisationUniqueName: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength:2,
        maxlength:15,
        validate:{
            validator(Name){
                return /^[a-z_]{3,30}$/.test(Name)
               },
               message:"name is incorrect formate"
        }
    },
    Address: {
        type: String,
        trim: true
    },
    LogoPic: {
        type: String,
        trim: true
    },
    coverPic: {
        type: String,
        trim: true
    },
    Organisation: {
        type: String,
        trim: true
    },
    ETD_Date: {
        type: Date,
        trim: true
    },
    CreatedAt: {
        type: Date,
        trim: true
    },
    FounderDetails: {
        type:Object,
        trim:true
    }

}, {versionKey: false}))

module.exports=OrganizationDetail;