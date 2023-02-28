const News = require('../models/NewsModel')

const searchNews = async (req, res) => {

    try {
        const { title,lim,page } = req.query;
        let limit = 10;
        let skip = 0;

        if(lim){
            limit = Number(lim);
        }
        if(page){
            skip = (Number(page)-1)*limit;
        }
        if (title) {

            const result = await News.find({ title: { $regex: req.query.title, $options: "i" } }).sort({_id:-1}).skip(skip).limit(limit);

            res.send(result);
        }
        else {
            const result = await News.find(req.query).sort({_id:-1}).skip(skip).limit(limit);

            res.send(result);
        }
        // const keyword = req.query.search
        //     ? {
        //         $or: [
        //             { name: { $regex: req.query.search, $options: "i" } },
        //             { email: { $regex: req.query.search, $options: "i" } },
        //         ],
        //     }
        //     : {};


    } catch (error) {

    }
}


module.exports = searchNews;