const News = require('../models/NewsModel')


//for single news
const singleNews = async (req, res) => {

    try {
        const { tag, slug } = req.params;
        const news = await News.findOne({ slug })

        if (news) {
            res.status(200);
            res.send(news)
        } else {
            res.status(500);
            
            res.json({"status":"No news Available"})
        }

    } catch (e) {
        console.log("Some error occur from single news file line number 10" + e)
    }
}

module.exports = singleNews;