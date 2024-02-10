const express=require("express")

const route=express.Router()

const {createApplyForm}=require("../controller/applyFormController")
route.post("/create-ApplyForm",createApplyForm)

module.exports=route