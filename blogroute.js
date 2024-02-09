const express=require("express")
const router=express.Router()
const user=require("./blogmodel")


router.post("/add",async(req,res)=>{
let data=req.body
let blog=new user(data)
let result=await blog.save()
res.json({
status:"success"    
}
)
res.send("success")
}
)

module.exports=router