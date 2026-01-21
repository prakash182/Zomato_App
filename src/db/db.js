const mongoose = require('mongoose');

function ConnectDB (){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("mongodb successfully connected!");
    })
    .catch((err)=>{
        console.log("mongodb connection error:", err);
    })
}