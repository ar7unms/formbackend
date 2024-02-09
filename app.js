const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogrouter=require("./blogroute")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://msarjun077:Arjun2000@cluster0.nmwlgoz.mongodb.net/blogappDB?retryWrites=true&w=majority",
{
    uUseNewUrlParser:true
})
app.use("/api/blog",blogrouter)


app.listen(3006,()=>{
    console.log("server running")
})