const mongoose =require('mongoose');
const mongoURL="mongodb://localhost:27017/myDB";

const connectTomongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connect success");
    });
}
module.exports=connectTomongo;