const dotenv=require("dotenv").config();
const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const cookieParser=require('cookie-parser');
const userRoute=require("./routes/userRoute")
const errorHandler=require("./middleware/errorMiddleware");
const app=express();

//!MiddleWares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:3000","http://localhost:5000"],
    methods:["GET","POST","PATCH"],
    credentials:true
}))

//! Routes
app.use("/api",userRoute);

app.get("/home",(req,res)=>{
    res.send("HomePage...")
})

// Assuming you have the necessary imports and Mongoose setup

app.get("/api/home12", async (req, res) => {
    try {
      const dbobj = mongoose.connection;
      const userData = await dbobj.collection('users').find().toArray();
      console.log(userData)
  
      res.status(200).json(userData );
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  




//! Error Middleware 
 app.use(errorHandler);
const port=5000;
mongoose.connect("mongodb://127.0.0.1:27017/ArgoOrgan").then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on ${port}`);
    })
}).catch((err)=>console.log(err))








