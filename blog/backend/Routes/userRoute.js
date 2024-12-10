const express = require('express');
const { register, Login, getUser, deleteUser, logOut, userData } = require('../controllers/User');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();
//# all routes for users 

// post || for new user 
router.route('/register').post(register);
 // post || for user login
router.route('/login').post(Login);
 // get || logout user
router.route('/logout').get(logOut);

// get || for get userdata by id
router.route('/userdata').get(isAuthenticated,userData);

 // get || for get all users
router.route('/allUser').get(getUser);
 // delete || for delete user by id
router.route('/deleteUser/:id').delete(isAuthenticated,deleteUser);


module.exports= router;