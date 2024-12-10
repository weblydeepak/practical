const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

// create new user 
exports.register =   async(req,res)=>{
    try {
        const {username, email, password} = req.body;
        let user = await User.findOne({email});
        
        if(user){
            return res.status(400).json({
                success:false,
                message: "User already exists"
            })
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        user = await User.create({username,email,password:hashedPassword})

        res.status(201).json({
            success:true,
            message: "User registered successfully"
        })
        

    } catch (error) {
        
        res.status(500).json({
            success:false,
            message: error.message
        })


    }
}


// login user 
exports.Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email }).select("+password");
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found"
        });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Password incorrect"
        });
      }
  
      // Generating a new token
      const token = jwt.sign({ _id: user._id }, process.env.SECKEY);
    
      
      // Avoid sending the password back to the client
      user.password = undefined;
  
      // res.status(200).json({
      //   success: true,
      //   user: user,
      //   token: `Bearer ${token}`,
      // });
      res.status(200).cookie("token", token ).json({
        success: true,
        user: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };

  
  exports.userData =async(req,res)=>{
   try {
       const user = await User.findById(req.user._id)
       res.json({
         success: true,
         user
       });
  
   } catch (error) {
    
   }
  } 
  




//  geting all the users 
exports.getUser = async(req,res)=>{
    try {
      const users = await User.find()
      res.json({
        success:true,
        users
      })
    } catch (error) {
        res.status(500).json({
            status:'failed',
            message: error.message
        })
    }
}


// delting users

exports.deleteUser = async(req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        
        if(!user){
            return res.status(404).json({
                success:false,
                message: "User not found"
            })
        }
        
        res.json({
            success:true,
            message: "User deleted successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            status:'failed',
            message: error.message
        })
    }
}


exports.logOut = async (req, res) => {
  try { 
     return res.status(200).cookie("token", null).json({
          success: true,
          message: "user logged out successfully"
      })
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      })
  }
}
























