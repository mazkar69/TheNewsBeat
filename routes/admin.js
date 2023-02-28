const epxress = require('express');
const router = epxress.Router();
const Admin = require('../models/Admin')
// const protect = require('../middleware/authMiddleware');
const adminLogin = require('../controllers/admin/adminLogin')


//Admin login route
router.route('/login').post(adminLogin);



//To make admin account
// router.post("/register",async(req,res)=>{
//     const {userId,password} = req.body;

//     try {
//         await Admin.create({userId,password});
//         res.json({"ok":1}).json(200);
//     } catch (e) {
//         res.json({"ok":0}).status(501);
//     }
// })



//Exporting router
module.exports = router;



