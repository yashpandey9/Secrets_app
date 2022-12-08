const mongoose = require('mongoose');
const Mongo_URI = "mongodb://localhost:27017/userinfoDB";

const connectDB = async() => {
    try{
        //mongoDB connection string 
        const con = await mongoose.connect(Mongo_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...')
})

module.exports = connectDB;