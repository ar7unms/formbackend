const express=require("express")
const router=express.Router()
const postmodel=require("./postmodel")

router.post("/post",async(req,res)=>{
    let data=req.body
    let post=new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
res.send("success")
})
module.exports=router