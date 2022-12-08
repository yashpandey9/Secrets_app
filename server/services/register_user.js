const user_model = require('../model/userinfo');

const register_service = async(username, pass_hash) => {
    try{
       let user_info = await user_model.findOne({
            email: username      
       });
       // user found with given email or username
       if(user_info)
          throw new Error("User already registered");
       
       // user not found therefore creating new one 
       user_info = {
          username,
          pass_hash
       };

       user_info = await user_model.create(user_model);

    }catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = register_service;