const Blog  = require('../models/BlogsSchema');
const User = require('../models/UserSchema');

// create Blog 
exports.addBlog=async(req,res)=>{
    try {
        const { title, content, image } = req.body;

        // Ensure req.user is defined
        if (!req.user) {
            return res.status(401).json({
                success:false,
                message: "User not authenticated"
            });
        }

        // Prepare blog data
        const blogdata = {
            title,
            content,
            image,
            owner: req.user._id
        };

        // Check for missing fields
        if (!title || !content || !image) {
            return res.status(401).json({
                success:false,
                message: "Please enter all fields: title, content, image",
            });
        }

        // Create new blog
        const newBlog = await Blog.create(blogdata);

        // Return success response
        return res.status(201).json({
            success:true,
            message: "Blog created successfully",
            data: newBlog
        });
    }catch (error) {
       res.status(500).json({
        success:false,
           message:error.message
       })
    }
}
// GET All Blogs (with authentication)
exports.getAllBlogs=async(req,res)=>{
 try {
    const Blogs = await Blog.find({});
     if(!Blogs){
        return res.status(404).json({
            success:false,
            message: "No blogs found"
        })
     }
    
    return res.status(200).json({
        success:true,
        message: "Blogs fetched successfully",
        data: Blogs
    })


    
 } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
 }
}

// GET Blog By ID  (with comments)(with authentication)
exports.getBlogById=async(req,res)=>{
    try {
       const blog = await Blog.findById(req.params.id);
       if(!blog){
        return res.status(404).json({
            success:false,
            message: "Blog not found"
        })
       }

       return res.status(200).json({
           success:true,
           message: "Blog fetched successfully",
           data: blog
       })
    } catch (error) {
       res.status(500).json({
        success:false,
           message:error.message
       })
    }
}

// UPDATE Blog  (with comments)  (with authentication)
exports.updateBlog=async(req,res)=>{
    try {
         const blog = await Blog.findById(req.params.id);
        
         if(!blog){
            return res.status(404).json({
                success:false,
                message: "Blog not found"
            })
         }
         if(req.user._id.toString()!==blog.owner.toString()){
            return res.status(403).json({
                success:false,
                message: "You are not authorized to update this blog"
            })
         }
         const updateBlog= await Blog.findByIdAndUpdate(
            req.params.id,
            { ...req.body },
            { new: true }
          );
         
        return res.status(200).json({
            success:true,
            message: "Blog updated successfully",
            data: updateBlog
        })
    
    } catch (error) {
       res.status(500).json({
        success:false,
           message:error.message
       })
    }
}

// DELETE Blog  (with authentication)  (with authentication) 
exports.deleteBlog=async(req,res)=>{
    try {
    
        const blog = await Blog.findByIdAndDelete(req.params.id)

        if(!blog){
            return res.status(404).json({
                success:false,
                message: "Blog not found"
            })
        }
        return res.status(200).json({
            success:true,
            message: "Blog deleted successfully"
        })

    } catch (error) {
       res.status(500).json({
        success:false,
           message:error.message
       })
    }
}












