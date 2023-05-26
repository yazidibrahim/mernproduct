const express =require('express');//to build backend quickly
const app = express();//!insance of express
const cors =require('cors');//!FOR CROSS ORIGIN POLICY
const PORT=1234;
app.use(cors());//USE THIS CORS PACKAGE WHEN SERVER STARTS UP

app.use(express.json());//! to parse json data
app.use(express.urlencoded({extended:true}));//!to parse uel encoded data
app.use(express.static('public'));//!to serve static files

//db
require('./dB')//!mongoose DB connection folder is called here then server starts up

app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
});
