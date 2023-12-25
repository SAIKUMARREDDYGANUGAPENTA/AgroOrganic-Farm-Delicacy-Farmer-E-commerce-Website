const express=require("express")
const router=express.Router();
const {registerUser, loginUser,logoutUser,getUser,getLoginStatus,updateUser, updatePhoto} =require("../controllers/userController")
const {protect}=require("../middleware/authMiddleware");

router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/logout",logoutUser);
router.get("/getuser",protect, getUser)
router.get("/getLoginStatus",getLoginStatus)
router.patch("/updateUser",protect,updateUser)
router.patch("/updateUser",protect,updatePhoto)
module.exports=router;