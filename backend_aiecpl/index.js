const express=require("express")
const app=express()

const port=5000

const start=()=>{
    
    app.listen(port,console.log(`server is running on port ${port}`))

}

start()
