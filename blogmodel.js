const mongoose =require("mongoose")

const blogSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobile:String,
        pincode:String,
        email:String,
        password:String

    }
)
module.exports=mongoose.model('blog',blogSchema)