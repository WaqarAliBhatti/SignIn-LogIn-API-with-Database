const express=require('express');
const { findOne } = require('../src/model/schema');
const PORT=process.env.PORT||3001;
const app=express();
require('../src/db/db');
const signUp=require('../src/model/schema')
app.listen(PORT,()=>{
    console.log("Server is Running on port : "+PORT)
});

app.use(express.json())

app.post('/signup',async (req,res)=>{
    try{
        const userRecords=new signUp(req.body);
        const insertUser= await userRecords.save();
        console.log(req.body);
        res.status(201).send(insertUser);
    }
    catch(e){
        res.send(e).status(400);
    }

})

app.get('/signup',async (req,res)=>{
    try{
        const allusers= await signUp.find({})
        res.status(200).send(allusers);
    }
    catch(e){
        res.status(400).send(e);
    }
})

app.post('/login',async (req,res)=>{
    try{
        const inputEmail=req.body.username;
        const password=req.body.password;

        const user=await signUp.findOne({username:inputEmail})
        if(!user){
            res.status(404).send('No Such Data in Database');
        }
        else{
        if(user.password===password){
        res.status(200).send('Logged In');
        console.log(user);

        }
        else
        {
            res.status(404).send('Log in Failed');
        }
        
        }
    }
    catch(e){
        res.send(e).status(400);
    }

})