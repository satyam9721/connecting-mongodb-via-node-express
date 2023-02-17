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

//retriving data from database


const fetched_data =  mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log(data);
        })




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
