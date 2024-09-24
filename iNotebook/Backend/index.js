const {connnectToMongo}=require('./connection');
connnectToMongo("mongodb://localhost:27017/myDB").then(()=>{
  console.log("connection success");
})

const express = require('express');
const app = express();

const port = 5000


app.use(express.json())

// Available Routes
 app.use('/api/auth', require('./routers/auth'))
 app.use('/api/notes', require('./routers/notes'))


app.listen(port, () => {
  console.log(`iNotebook listening at http://localhost:${port}`)
})