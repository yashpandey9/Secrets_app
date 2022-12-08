const homepage = async(req, res) => {
    try{
       res.render("home");
    }catch(err){
        console.log(err);
    }
}

module.exports = homepage;