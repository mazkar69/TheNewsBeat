const News = require('../models/NewsModel');



const getNews = async(req,res)=>{
 
const {tag} = req.params;

const {page,lim} = req.query;



const apiData = News.find({"category":tag})

let limit = 6;   
if(lim)
{
    limit = Number(lim);
}
if(page)
{
    let pageNo = Number(page);
    pageNo = pageNo || 1;

    let skip = (pageNo-1)*limit;
    apiData.skip(skip);

    
}

const result = await apiData.limit(limit);
res.send(result);

}


module.exports = getNews;