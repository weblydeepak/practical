const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[ true," title is require"]
    },
    content:{
        type: String,
        required:[ true," content is require"]
    },
    image:{
        type: String,
        required:[ true," image is require"]
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: [true, "user id is required"],
    }

    
})

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
