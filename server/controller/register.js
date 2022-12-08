const register = async(req, res) => {
    try{
       res.render("register");
    }catch(err){
        console.log(err);
    }
}

module.exports = register;