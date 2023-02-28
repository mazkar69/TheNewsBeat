//If you want to use this file then add to the app.js file.


const mongoose = require('mongoose')
const dotenv = require('dotenv').config();



mongoose.set('strictQuery',true);
// Setting dotenv 
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working


const DB = process.env.URI;

mongoose.connect(DB).then(()=>{
    console.log("Connection Successfull.")
}).catch((err)=>{
    console.log("error occor");
})

