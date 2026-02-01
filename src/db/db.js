const mongoose = require('mongoose')

function ConnectDB (){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongodb successfully connected!");
    })
    .catch((err)=>{
        console.log("mongodb connection error:", err);
    })
}

module.exports = ConnectDB;