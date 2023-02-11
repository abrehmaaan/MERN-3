import express from 'express'
const app = express()
app.get("/",(req,res)=>{
    res.sendfile("home.html")
})
app.listen(8080,()=>{
    console.log("Server Running...");
})