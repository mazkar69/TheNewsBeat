
const mongoose = require('mongoose')
// const News = require('./NewsModel');


const CommentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type:String,
        required:true,
        trim:true,

    },
    slug:{
        type:String,
        required:true,
    },
    publishedAt:{
        type:Date,
        default:Date.now(),
    }
})


//Creating the models

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;