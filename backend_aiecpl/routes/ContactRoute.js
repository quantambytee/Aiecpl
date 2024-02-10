const express=require("express")

const route=express.Router()

const {createContact}=require("../controller/contactController")
route.post("/create-contact",createContact)

module.exports=route