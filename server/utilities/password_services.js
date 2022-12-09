const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash_password = async(password)=>{
    try{
        const encrypted_password = await bcrypt.hash(password, saltRounds);
        return encrypted_password;
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

const compare_password = async(new_password, password_hash)=>{
    try{
        const is_same = await bcrypt.compare(new_password, password_hash);
        return is_same;
    }
    catch(err){
        console.log(err.message);
        throw err;
    }
}

module.exports = {
    compare_password,
    hash_password
}