const express = require('express');
const dotenv = require('dotenv');


const app = express();
// app.use(express())
app.use(express.json());
dotenv.config()

const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("Hello world!");
})

app.post("/signup",(req,res)=>{
    const {username,email,password,dob} = req.body;

    if(!username || !email || !password || !dob){
        res.status(400).json({message:"All fields are reqired"});
    }
    if(!email){
        res.status(400).json({message:"Email should not be empty"})
    }
    if(!/\S+@\S+\.\S+/.test(email)){
        res.status(400).json({message:"Please enter Vaild email"})
    }

    if(password.length < 8 && password.length > 16){
        res.status(400).json({message:"Password should contain leats of 8 to 16 characters"})
    }

    res.status(201).json({message:"User created Successfully"})
    
})

app.listen(PORT,()=>{
    console.log(`Servre is running on port http://localhost:${PORT}`)
})