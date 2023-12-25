// const asyncHandler=require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel")

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}

// ! register User
const registerUser = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phonenumber = req.body.phonenumber;
  const role = req.body.role; // !Extract the role from the request body
  const address=req.body.address;
  const state=req.body.state;
  const pincode=req.body.pincode;

  if (!name || !email || !password || !phonenumber || !role||!address||!state||!pincode) {
      return res.status(400).json({ message: 'Please fill all required fields' });
  }

  if (password.length < 6) {
      return res.status(400).json({ message: 'Password should be at least 6 characters long' });
  }

  try {
      const userExists = await User.findOne({ email });
      if (userExists) {
          return res.status(400).json({ message: 'User already exists' });
      }

      const user = await User.create({ name, email, password, phonenumber, role,address,state,pincode });
      const token = generateToken(user._id);

      res.cookie('token', token, {
          httpOnly: true,
          path: '/',
          expires: new Date(Date.now() + 1000 * 86400),
      });

      // Send back the user details including the role
      return res.status(201).json({ name, email, role, token, password, phonenumber,address,state,pincode });
  } catch (error) {
      next(error);
  }
};


// ! Login User

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide an email and a password' });
    }

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Incorrect email or password' });
        }

        const passwordIsCorrect = await bcrypt.compare(password, user.password);
        const token = generateToken(user._id);

        
    console.log(email);
    console.log(user.password);

        if (user && passwordIsCorrect) {
            let newUser = await User.findOne({ email }).select('-password');
            res.cookie('token', token, {
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 1000 * 86400),
                // secure: true,
                // sameSite: 'none'
            });
            return res.status(201).json(newUser);
        } else {
            return res.status(400).json({ message: 'Please provide a correct email and password' });
        }
    } catch (error) {
        next(error); // Pass the error to the Express error handling middleware
    }
};

//! logout user
const logoutUser = async (req, res) => {
    try {
      res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // sameSite: none
      });
      res.status(200).json({ message: " Successfully logged out" });
    } catch (error) {
      res.status(500).json({ message: "Server Error: Unable to log out" });
    }
  }

// ! get Users
  const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404);
        throw new Error('No such user found');
      }
    } catch (error) {
      res.status(500).json({ message: "Server Error: Unable to get user" });
    }
  }

//   //! Get login Status
const getLoginStatus = async (req, res) => {
  try {
      const token = req.cookies.token;
      if (!token) {
          return res.json(false);  // <-- Headers sent here
      }
      //verify token
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if (verified) {
          return res.json(true);  // <-- Return here to prevent further execution
      }
      return res.json(false);  // <-- Optional, as it will not be executed if verified is true
  } catch (error) {
      res.status(500).json({ message: "Server Error: Unable to get login status" });
  }
}


  // ! update user
  const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (user) {
            const { name, phonenumber,address,state,pincode} = user;
              
            // Update user properties based on input or keep the existing value
            user.name = req.body.name || name;
            user.phonenumber = req.body.phonenumber || phonenumber;

            // Update address object if it exists in the request body
                user.address = req.body.address || address;
                user.state = req.body.state || state;
                user.pincode = req.body.pincode || pincode;
            

            console.log("Address");
            console.log(user.address);

            const updatedUser = await user.save();
            res.status(200).json(updatedUser);
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error: Unable to update user" });
    }
};

  

  //!update Photo
  const updatePhoto = async(req, res) => {
    const {photo}=req.body;
    const user=await User.findById(req.user._id);
    user.photo=photo
    const updatedUser=await user.save();
    res.send(200).json(updatedUser);
  }
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    getLoginStatus,
    updateUser,
    updatePhoto
}