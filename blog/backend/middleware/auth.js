const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');


// checking/Authenticating  user's  
exports.isAuthenticated = async(req,res,next)=>{
    try {
        
        // const {a} = req.body;
        // console.log(req.body)
        // const token = req.headers.authorization.split(' ')[1];
        // const acttoken = token.split(' ')[1];
        const {token}= req.cookies;
        if(!token){
            return res.status(401).json({
                success:false,
                message: "Token not provided"
            });
        }

        const decoded = jwt.verify(token, process.env.SECKEY);

        // Find the user by ID
        const user = await User.findById(decoded._id);

        // Check if the user exists
        if (!user) {
            return res.status(401).json({
                success:false,
                message: "User not found"
            });
        }

        // Attach the user to the request
        req.user = user;
        // Proceed to the next middleware or controller
        next();

        
    } catch (error) {
        res.status(500).json({
            success:false,
           message:error.message
        })
    }
}




