const News = require('../models/NewsModel');

const uploadNews = async (req, res) => {

    try {

        // res.send(req.body);
        const {tags} = req.body;
        req.body.tags = tags.split(",");
        // console.log(req.body)
        const news = new News(req.body);
        const response = await news.save();
        res.status(200);
        res.send("data saved successfully");

    }
    catch (e) {
        res.status(500).send("some error occur" + e);
        console.log("Some error " + e);

    }

}

module.exports = uploadNews;





/*

{
    "news_id":"kdsjfls798ds",
    "author":"Azkar",
    "title":"There is no one who can do this",
    "description":"I am the description of the news documents",
    "urlToImage":" thisisthurlofimg",
    "content":"This is main content where all the details of the news will be available",
    "state":"Uttar Pradesh",
    "country":"india",
    "category":"business"
}


*/