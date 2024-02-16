const express=require("express")
const router=express.Router()
const user=require("./blogmodel")
const bcrypt =require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt =await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.get("/viewall",async(req,res)=>{
    let result =await user.find()
    res.json(result)

})
router.post("/signin",async(req,res)=>{
    let email =req.body.email
    let data = await user.findOne({"email":email})
    if(!data){
       return res.json({
            status:"invalid user"
        })
    }
    let dbpassword =data.password
    let inputpassword= req.body.password
    const match= await bcrypt.compare(inputpassword,dbpassword)
    if(!match){
       return res.json({
            status:"Invalid password"
        })
    }
    res.json({
        status:"success","userdata":data
    })

})
router.post("/add",async(req,res)=>{
let {data} = {"data": req.body}
let password=data.password
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let blog = new user(data)
let result= await blog.save()
res.json({
     status:"success"    
     })
    })

module.exports=router