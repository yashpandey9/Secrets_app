const register_service = require('../services/register_user');

const create = async(req, res) => {
    try{
       const username = req.body.username;
       const password = req.body.password;

       if(!username){
        throw new Error("username missing");
       }
       if(!password){
        throw new Error("password missing");
       }


       else{
         
         await register_service(username, password);
    
         res.redirect("/secrets");
       }
    }catch(err){
        console.log(err.message);
        return res.render("register",{error_message:err.message})
    }
}

module.exports = create;