const user_model = require('../model/userinfo');
const compare_password_service = require("../utilities/password_services").compare_password;

const login_service = async(username, password) => {
    try{
       let user_info = await user_model.findOne({
            username: username      
       });
       // user does not found with given email or username
       if(!user_info)
          throw new Error("user does not exist, please register first!");
       const password_check = await compare_password_service(password, user_info.password);
       if(password_check)
          throw new Error("password  is incorrect!");
    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = login_service;