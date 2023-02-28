const mongoose = require('mongoose')



//Creating schema
const adminSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    }
})

//Creting models
const Admin = mongoose.model('admin',adminSchema);

module.exports = Admin;
