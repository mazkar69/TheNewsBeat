const { mongo } = require('mongoose')
const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
         
    },
    email:{
        type:String,
        required:true,
    },
    sub:{
        type:String,
        trim:true,
        required:true,
    },
    msg:{
        type:String,
        trim:true,
        required:true
    }

})

const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;
