const mongoose=require("mongoose")
 const {ObjectId}=mongoose.Schema;
 const bcrypt=require("bcrypt");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"]
    },
    phonenumber:{
        type:String,
        required:[true,"Please add your Phone number"],
        unique:true,
        trim:true,
        match:[
            /^[1-9][0-9]{9}$/
        ]
    },
    role:{
        type:String,
        required:true,
       
        
    },
    photo:{
        type:String,
        required:true,
        default :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5UTeqYruTd8M_yxIdyI3u1D0ydjy7dZ_bJUjo1Vg&s.png"

    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match:[
            /^[A-Z0-9+_.-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i,"Please enter a valid email ID "
        ]
    },
    password:{
        type:String,
        required:true,
        match:[
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#])[A-Za-z\d@$!%*#?&]{6,}$/,"Password Incorrect : Minimum 6 characters , at least one letter,one special character and one digit"
        ]
    }, 
   address:{
     type:String,
     required:true,
   },
   state:{
    type:String,
    required:true,
  },
  pincode:{
    type:String,
    required:true,
  }


});

userSchema.pre('save', async function(next) {
    if (!this.isModified("password")) {
        return next();
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt); // await here
    this.password = hashedPassword;
    next();
});




const User=mongoose.model("User",userSchema)
module.exports=User;