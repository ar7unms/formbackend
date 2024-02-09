const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogrouter=require("./blogroute")

const app=express()

app.use(express.json())
app.use(cors())


app.use("/api/blog",blogrouter)
app.get("/",(req,res)=>{
    res.send("welcome")
})

app.listen(3006,()=>{
    console.log("server running")
})