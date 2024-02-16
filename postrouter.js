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

router.get("/viewall",async(req,res)=>{
    let result= await postmodel.find()
    .populate("userid","age mobile pincode address post -_id")
    .exec()
    res.json(result)
})

router.get("/viewpost",async(req,res)=>{
    let result=await postmodel.find()
    res.json(result)
})
module.exports=router