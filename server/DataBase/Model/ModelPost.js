var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.set('debug', true)
////************ User Detail ************************ */
var post = mongoose.model('Post', new Schema({
    PostBy: {
        type:{
            _id:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        }
    },
    like: {
        type: Number,
        default: 0
    },
    likedBy: {
        type: Array
    },
    comments: {
        type: Array
    },
    postTime: {
        type: Date,
        default: new Date()
    },
    Posttype: {
        type: String,
        trim: true,
        validate:{
            validator(gender){
                  return /^article$|^post$/.test('other');
             },
             message:"Post Type is not valid"
      }
    },
    Share: {
        type: Array
    },
    Title: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    Text: {
        type: String,
        minlength: 10
    },
    Images: {
        type: Array,
        trim: true
    },
    Video: {
        type: Array
    }
}, {versionKey: false}))

module.exports = post;