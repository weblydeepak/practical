const express = require('express');
const { addBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/Blogs');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

// routes 


// post|| posting a single blog
router.route('/addBlog').post(isAuthenticated, addBlog)
// get|| All blogs 
router.route('/allBlogs').get(getAllBlogs)
// get|| geting a single blog by id 
router.route('/blog/:id').get( getBlogById)
// put|| updateBlog a single blog
router.route('/updateBlog/:id').put(isAuthenticated,updateBlog)
// delete|| delete Blog
router.route('/deleteBlog/:id').delete(isAuthenticated,deleteBlog)


module.exports= router;