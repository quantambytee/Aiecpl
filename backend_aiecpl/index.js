require('dotenv').config()
const express=require("express")
const app=express()
const cors = require('cors');

const port=process.env.PORT || 5000

// CORS options
const corsOptions = {
  origin: '*', // Allows requests from any origin
    // origin: 'http://localhost:5173', // Allow only this origin to access the resources
    // methods: 'GET,POST,PUT,PATCH,DELETE', // Allow only these methods
    // allowedHeaders: 'Content-Type,Authorization', // Allow only these headers
    // optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  
  // Enable CORS with options
  app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());
// db
const connectDB=require("./db/connect")
// routes
const contactRouter=require("./routes/ContactRoute")
const applyFormRouter=require("./routes/applyFormRoutes")
app.use("/api",contactRouter)
app.use("/api",applyFormRouter)

const start=()=>{
    connectDB(process.env.MONGO_URI)
    app.listen(port,console.log(`server is running on port ${port}`))

}

start()
