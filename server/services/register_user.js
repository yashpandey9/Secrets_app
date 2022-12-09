const user_model = require('../model/userinfo');

const register_service = async(username, password) => {
    try{
       let user_info = await user_model.findOne({
            username: username      
       });
       // user found with given email or username
       if(user_info)
          throw new Error("User already registered");
      
       // user not found therefore creating new one 
       user_info = {
          username: username,
          password: password
       };
      
       user_info = await user_model.create(user_info);

    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = register_service;