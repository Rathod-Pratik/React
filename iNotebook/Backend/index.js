const {connnectToMongo}=require('./connection');
connnectToMongo("mongodb+srv://RathodPratik:Pratik%401432@cluster0.v5r2m.mongodb.net/iNotebook?retryWrites=true&w=majority").then(()=>{
  console.log("connection success");
})

const express = require('express');
const app = express();
const cors=require('cors');
const port = 5000


app.use(express.json())
app.use(cors())
// Available Routes
 app.use('/api/auth', require('./routers/auth'))
 app.use('/api/notes', require('./routers/notes'))


app.listen(port, () => {
  console.log(`iNotebook listening at http://localhost:${port}`)
})