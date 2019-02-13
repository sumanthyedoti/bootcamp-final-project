var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Group = mongoose.model('Group', new Schema({
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
    organisationId: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        trim: true,
        default:new Date()
    },
    topics:{
      type:Array,
      default:new Array()
    },
    event:{
        type:Array,
        default:new Array()
    },
    member:{
        type:Array
    }
}, {versionKey: false}))

module.exports=Group;