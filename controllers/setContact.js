const Contact = require('../models/ContactModel')

const setContact = async(req,res)=>{
   try{
    const response = await Contact.create(req.body);
    res.status(200).json({status:"Ok"})
   }catch(e){
    console.log("Error form file setContact.js in controller folder.")
    res.status(500);
    res.send(e);
   }
}

module.exports = setContact;