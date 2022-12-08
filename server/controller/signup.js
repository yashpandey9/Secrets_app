const register_service = require('../services/register_user');

const create = async(req, res) => {
    try{
       const username = req.body.email;
       const pass_hash = req.body.password;

       await register_service(username, pass_hash);
    
       res.redirect("/");
    }catch(err){
        console.log(err.message);
        return res.status(400).json({
            message : err.message
        });
    }
}

module.exports = create;