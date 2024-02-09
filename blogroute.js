const express=require("express")
const router=express.Router()
const user=require("./blogmodel")
const bcrypt =require("bcryptjs")

hashPasswordGenerator=async(password)=>{
    const salt =await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

router.post("/add",async(req,res)=>{
let {data} = {"data": req.body}
let password=data.password
hashPasswordGenerator(password).then(
    (hashedPassword)=>
    {
        console.log(hashedPassword)
        data.password=hashedPassword
        console.log(data)
let blog=new user(data)
let result= blog.save()
res.json({
status:"success"    
})
})
})

module.exports=router