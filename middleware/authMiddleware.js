const asyncHandler=require("express-async-handler");
const jwt=require('jsonwebtoken');
const User = require('../models/userModel')

const protect=async(req,res,next)=>{
    try{
                const token=req.cookies.token
                if(!token){
                    res.status(401);
                    throw new Error("Not Authorised,please Login")
                }
                 //verify token
                const verified=jwt.verify(token,process.env.JWT_SECRET);
                //get user Id from token
                        const user=await User.findById(verified.id).select("-password");
            if(!user){
                res.status(401);
                throw new Error("User not found")
            }
            req.user=user;
            next()
    }catch(err){
        res.status(401);
        throw new Error("Not Authorised,please Login")
    }
};



module.exports={
    protect,
}
