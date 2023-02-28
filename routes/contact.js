const express = require('express')
const router = express.Router();
const setContact =require('../controllers/setContact');



router.route('/').post(setContact);





module.exports = router;