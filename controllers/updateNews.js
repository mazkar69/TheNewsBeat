const News = require('../models/NewsModel')

const updateNews = async(req,res)=>{
    // console.log(req.body)
    try{
        if(typeof req.body.tags === "string")
        {
            req.body.tag = req.body.tags.split(",");

        }
        
        const news  = await News.updateOne({_id:req.body._id},{$set:req.body})
        res.status(200).json(news);
    }catch(e)
    {
        res.status(500).json({"status":"now updated"})
        console.log("Error occur" + e);
    }
}

module.exports = updateNews;