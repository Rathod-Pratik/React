const express = require('express');
const User = require('../Model/User');
const app = express.Router();
const { body, validationResult } = require('express-validator');
const bcrtpt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

//Route-1 Create user using POST 'api/auth/createuser' No login required
app.post('/createuser', [
    body('name', 'Enter valid name').isLength({ min: 5 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    //if there are errors return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try{
        //insert data into to mongodb
        let user=await User.findOne({email:req.body.email});
        if(user){
            success=false;
        return res.status(400).json({success,error:"sorry a user with this email already exists"});
    }
    const salt =await bcrtpt.genSalt(10);
   const secPass=await bcrtpt.hash(req.body.password,salt);
     user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
    })
    //return user data as response 
    const data={
        user:{
            id:user.id
        }
    };
    const JWT_SECRET="Rathod";
    const authtoken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authtoken})

    //if error occured in try block catch block will run
}catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
}
})

//Route-2  login user user using POST 'api/auth/login' No login
app.post('/login', [
    body('email', 'enter valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    //if there are errors return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array()});
    }

    const {email,password}=req.body;
    try{
        //insert data into to mongodb
        let user=await User.findOne({email});
        if(!user){
        return res.status(400).json({success,error: "Please try to login with correct credentials"});
    }
    //return user data as response 

    const passwordCompare=await bcrtpt.compare(password,user.password);

    if(!passwordCompare){
        return res.status(400).json({success,error: "Please try to login with correct credentials"})
    }

    const data={
        user:{
            id:user.id
        }
    };
    const JWT_SECRET="Rathod";
    const authtoken=jwt.sign(data,JWT_SECRET);
    console.log("Success is set to:", success);
    success=true;
    res.json({success,authtoken})

    //if error occured in try block catch block will run
}catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
}
})


//route 3: get loggedin User details using post  'api/auth/getuser' No login

app.post('/getuser',fetchuser, async (req, res) => {
    let success = false;
    //if there are errors return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array()});
    }

    try{
      let  userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);
    //if error occured in try block catch block will run
}catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
}
})
module.exports = app;