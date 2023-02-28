const express = require('express');
const router = express.Router();
const uploadNews = require('../controllers/uploadNews')
const getNews = require('../controllers/getNews');
const singleNews = require('../controllers/singleNews')
const allNews = require('../controllers/allNews');
const deleteNews = require('../controllers/deleteNews')
const searchNews = require('../controllers/searchNews')
const updateNews = require('../controllers/updateNews')
//middleware
const protect = require('../middleware/authMiddleware')



router.route('/').get(allNews);         //It will fetch all the news also accept page_no and limit 
router.route("/:tag").get(getNews);         //Fetch new by categories {not in use}
router.route("/:tag/:slug").get(singleNews);         //for specific new. fetch only one news by slug


//To delete the news,These routes are protected with jwt token
router.route('/upload').post(protect,uploadNews);       //To upload the news
router.route('/delete').delete(protect,deleteNews);         //To Delete the news
router.route('/update').patch(protect,updateNews);      //Update News.

//Search news
router.route('/search').post(searchNews);

module.exports = router;

