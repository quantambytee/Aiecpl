const mongoose=require("mongoose")

const contactSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,

    },
    phone:{
        type:Number
    },
    query:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Contact",contactSchema)