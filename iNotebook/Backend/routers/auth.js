const express = require('express');
const User = require('../Model/User');
const app = express.Router();
const { body, validationResult } = require('express-validator');

//Create user using POST 'api/auth/createuser' No login required
app.post('/createuser', [
    body('name', 'Enter valid name').isLength({ min: 5 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    //if there are errors return bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    try{
        //insert data into to mongodb
        let user=await User.findOne({email:req.body.email});
        if(user){
        return res.status(400).json({error:"sorry a user with this email already exists"});
    }
     user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    })
    //return user data as response 
    res.json(user);

    //if error occured in try block catch block will run
}catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
}
})

module.exports = app;