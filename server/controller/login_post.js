const login_service = require('../services/login_user');

const login = async(req, res) => {
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
         
         await login_service(username, password);
    
         res.redirect("/secrets");
       }
    }catch(err){
        console.log(err.message);
        return res.render("login",{error_message:err.message})
    }
}

module.exports = login;