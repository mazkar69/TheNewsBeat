
// import the comment models
const Comment = require('../models/CommentModel');


const getComment  = async(req,res)=>{
    try{
        const {slug} = req.body;
        const comment = await Comment.find({slug}).sort({publishedAt:-1});
        res.status(200).send(comment);
    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
}


module.exports = getComment;