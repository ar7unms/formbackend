const express=require("express")
const router=express.Router()
const user=require("./blogmodel")
const bcrypt =require("bcryptjs")

hashPasswordGenerator=async(password)=>{
    const salt =await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

router.post("/signin",async(req,res)=>{
    let input = req.body
    let email =req.body.email
    let data = await user.findOne({"email":email})
    if(!data){
        res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbpassword =data.password
    let inputpassword= req.body.password
    const match= await bcrypt.compare(dbpassword,inputpassword)
    if(!match){
        res.json({
            status:"Invalid password"
        })
    }
    res.json({
        status:"success"
    })

})

router.post("/add",async(req,res)=>{
let {data} = {"data": req.body}
let password=data.password
//hashPasswordGenerator(password).then(
  //  (hashedPassword)=>
   // {
    //    console.log(hashedPassword)
    //    data.password=hashedPassword
    //    console.log(data)
// let blog=new user(data)
// let result= blog.save()
// res.json({
// status:"success"    
// })
// })
// })
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let blog = new user(data)
let result= await blog.save()
res.json({
     status:"success"    
     })
    })

module.exports=router