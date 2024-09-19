const express=require('express');
const app=express.Router();


app.get('/',(req,res)=>{
    return res.json({
        a:"Rathod Pratik",
        name:"Mohit noob"
    });
})

module.exports=app