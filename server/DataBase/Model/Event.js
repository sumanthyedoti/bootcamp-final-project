var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Event = mongoose.model('Event', new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        minlength:3,
        maxlength:30
    },
    about: {
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
    startDate:{
        type:Date,
        trim:true
    },
    endDate:{
        type:Date,
        trim:true
    },
    orgId:{
        type:String,
        trim:true
    },
    member:{
        type:Array
    }

}, {versionKey: false}))

module.exports=Event;