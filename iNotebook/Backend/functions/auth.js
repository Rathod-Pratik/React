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
    const name=req.body.name;
    //return user data as response 
    const data={
        user:{
            id:user.id
        }
    };
    const JWT_SECRET="Rathod";
    const authtoken=jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success,authtoken,name})

    //if error occured in try block catch block will run
}catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
}
})

//Route-2  login user user using POST 'api/auth/login' No login
app.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;

    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        // Check if the user exists
        let user = await User.findOne({ email });
        const name=user.name;
        if (!user) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        // Compare password bcrtpt
        const passwordCompare = await bcrtpt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        // Create payload for the token
        const data = {
            user: {
                id: user.id
            }
        };

        // Generate a new JWT token
        const JWT_SECRET = "Rathod";  // Use an environment variable in production
        const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour

        // Set success to true and send the response with the token
        success = true;
        res.json({ success, authtoken,"name": name});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occurred");
    }
});


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