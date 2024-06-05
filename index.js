const express = require ("express");

const app = express();

app.get("/test",(req,res)=>{
    res.send("<h2>Welcome to App>/h2>");
})
const PORT = 8080;
app.listen("server listening at port no :",PORT);