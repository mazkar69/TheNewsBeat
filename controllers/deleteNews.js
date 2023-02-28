//This route will delete the news it only takes _id in req.body and return 200 if successfully deleted.

const News = require('../models/NewsModel');


const deleteNews = async(req,res)=>{
    try{
        // console.log(req.body);
        const {_id} = req.body;
        await News.deleteOne({_id});
        res.status(200).json({"status":"ok"});

    }catch(e){
        res.status(500).res.send("some error occor")
    }
}

module.exports = deleteNews;