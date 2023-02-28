const generateToken = require('../../config/generateToken');
const Admin = require('../../models/Admin')

const adminLogin = async(req,res)=>{
    const {userId,password} = req.body;
    try {
        const data = await Admin.findOne({userId})

        if(data){
            if(password === data.password)
            {
                const token = generateToken(data._id);
                res.json({token}).status(200);
            }
            else{
                res.send("invalid credential").status(501)

            }
        }
        else{
            
            res.send("Record not found").status(501)
        }
    } catch (error) {
        res.send("Some error occor").status(501)
    }
}


module.exports = adminLogin;