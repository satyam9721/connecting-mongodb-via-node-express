const express = require('express');
const mongoose = require('mongoose');
const mongoURI='mongodb://0.0.0.0:27017/go_foodmern'
const app= express();

mongoose.set('strictQuery',true);

mongoose.set('strictQuery',true);

const mongoDB= ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    })
}
// mongoose.connect('mongodb://0.0.0.0:27017/go_foodmern',{
//     userNewUrlParser: true,
//     useUnifiedTopology:true
// })
// .then(()=> console.log('mongoDB connected...'))
// .catch((err)=> console.log(err))


app.listen(3000,()=>{
    console.log("Running on port 5000")
})

module.exports=mongoDB;