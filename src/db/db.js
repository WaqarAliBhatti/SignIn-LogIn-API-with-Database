const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/wakkarDB").then(()=>{
    console.log('Database Connected');
}).catch((e)=>{
    console.log('Database connection Failed\n'+e);
})