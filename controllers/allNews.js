const { count } = require('../models/NewsModel');
const News = require('../models/NewsModel')

const allNews = async (req, res) => {
    try {
        const { page, lim, sortBy, category, state } = req.query;
        // res.send(req.query)
        let queryObject = {};
        //tags
        if (category) {
            queryObject.category = category;
        }
        if (state) {
            queryObject.state = state
        }
        const apiData = News.find(queryObject).sort({ _id: -1 });

        if (sortBy) {
            switch (sortBy) {
                case 'top':
                    apiData.find({ "sortBy.top": true })
                    break;
                case 'popular':
                    apiData.find({ "sortBy.popular": true })
                    break;
                case 'tranding':
                    apiData.find({ "sortBy.tranding": true })
                    break;
                case 'breakingNews':
                    apiData.find({ "sortBy.breakingNews": true })
                    break;
                default:
                    break;
            }
        }



        let limit = 6;
        if (lim) {
            limit = Number(lim);
        }
        if (page) {
            let pageNo = Number(page);
            pageNo = pageNo || 1;
            let skip = (pageNo - 1) * limit;
            apiData.skip(skip);

        }


        const result = await apiData.limit(limit);
        res.send(result);

    } catch (e) {
        console.log("Some error occur from allNews file in controllers, Error is " + e);
    }

}


module.exports = allNews;