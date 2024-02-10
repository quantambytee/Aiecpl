const Contact=require("../model/Contact")


const createContact=async(req,res)=>{
    try {
        console.log(req.body);
        const createdData=await Contact.create(req.body)
        console.log("created data",createdData);
        res.status(200).json("sucessfully created")
    } catch (error) {
        res.status(400).json("")
    }
}
module.exports={createContact}