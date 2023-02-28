//This is comment route

const express = require("express")
const router = express.Router();

//Importing the controllers
const uploadComment = require('../controllers/uploadComment')
const getComment = require("../controllers/getComment")

//To upload and get comment the comment
router.route("/comment/upload").post(uploadComment)
router.route("/comment/get").post(getComment);



module.exports = router;