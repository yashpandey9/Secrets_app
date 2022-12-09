const login_get = async(req, res) => {
    try{
       res.render("login");
    }catch(err){
        console.log(err);
    }
}

module.exports = login_get;