
// import the comment models
const Comment = require('../models/CommentModel');


const uploadComment  = async(req,res)=>{
    // res.send(req.body)
    try{
        // console.log(req.body);
        await Comment.create(req.body);
        res.status(200).json({"success":"ok"});
    }catch(e){
        console.log("Error is comming from line number 12 uploadComment file in controller" + e);
        res.status(500).send(e);

    }


}


module.exports = uploadComment;