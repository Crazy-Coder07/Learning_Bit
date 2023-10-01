// write mondodb connection database methods
const mongoose = require('mongoose');

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected Successfully ${mongoose.connection.host}`)
    }catch(error){
        console.log("MongoDb connection error:",error);
    }
}

module.exports = connectDB;
