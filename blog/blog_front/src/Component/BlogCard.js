import React from 'react'
import "../Style/BlogCard.css"
const BlogCard = ({blogs,readMore}) => { 
  return (
   <div className="blogCard">
    <img src={blogs.image} alt="" />
    <h2>{blogs.title}</h2>
    <p className='para'style={{ whiteSpace: 'pre-wrap' }}>{blogs.content.split(" ").slice(0, 10).join(" ")}<span className='readMore' onClick={()=>readMore(blogs._id)}>Read More..</span></p>
   </div>
  )
}

export default BlogCard