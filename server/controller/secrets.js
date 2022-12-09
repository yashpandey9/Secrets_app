const secrets = async(req, res) => {
    try{
       res.render("secrets");
    }catch(err){
        console.log(err);
    }
}

module.exports = secrets;