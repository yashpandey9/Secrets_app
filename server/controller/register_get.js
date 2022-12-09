const register = async(req, res) => {
    try{
       res.render("register",{error_message : ""});
    }catch(err){
        console.log(err);
    }
}

module.exports = register;