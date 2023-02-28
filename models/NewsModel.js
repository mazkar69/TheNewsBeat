//Models and schema Edit this as per the need and require in the app.js file.

const mongoose = require('mongoose');

//Models and schema

//This schema is used like nested object.
const sortBy = new mongoose.Schema({
    top:{
        type:Boolean
    },
    popular:{
        type:Boolean
    },
    tranding:{
        type:Boolean
    },
    breakingNews:{
        type:Boolean
    }
})

const newsSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true,

    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        maxLength:500
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        lowercase: true,
        required: true,
    },
    state: {
        type: String,
        lowercase: true

    },
    urlToImage: {
        type: String,
        required: true
    },
    tags: [
        {
            type: String,
            lowercase: true,
            trim:true,
        }
    ],
    sortBy:{
        type:sortBy
    },
    views:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0,
    },
    share:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    }

})


//Creating the collection here with the employee name
const News = mongoose.model("New", newsSchema);

module.exports = News;
