const user_model = require('../model/userinfo');
const encrypt_password_service =require("../utilities/password_services").hash_password;

const register_service = async(username, password) => {
    try{
      const encrypted_password = await encrypt_password_service(password);
       let user_info = await user_model.findOne({
            username: username      
       });
       // user found with given email or username
       if(user_info)
          throw new Error("User already registered");
      
       // user not found therefore creating new one 
       user_info = {
          username: username,
          password: encrypted_password
       };
      
       user_info = await user_model.create(user_info);

    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = register_service;