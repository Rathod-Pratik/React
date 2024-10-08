const mongoose =require('mongoose');

const notesSchema=new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    email:{
        type :String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    date: {
        type: Date,
        default: Date.now
    }

},{timestamps:true});

const User=mongoose.model("user",notesSchema);
module.exports=User;