const express=require('express');
const User =require('../Model/User');
const app=express.Router();


app.post('/',(req,res)=>{
    const user=User(req.body);
    user.save();
    return res.send(req.body);
})

module.exports=app