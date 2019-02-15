var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Group = mongoose.model('Task', new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength:3,
        maxlength:30
    },
    task: {
        type: String,
        trim: true,
        required: true,
        minlength:3,
        maxlength:300
    },
    topics:{
      type:String,
      trim:true
    },
    createDate:{
        type:Date,
        default:new Date()
    },
    dueDate:{
        type:Date,
        trim:true
    },
    gId:{
        type:String,
        trim:true
    },
    uid:{
        type:String,
        trim:true
    },
    member:{
        type:Array
    },
    incompeteMember:{
        type:Array
    },
    completeMember:{
        type:Array
    }

}, {versionKey: false}))

module.exports=Group;