import React, { useState } from 'react'
import "../Style/NewBlog.css"
import { useDispatch } from 'react-redux';
import { createBlog, loadBlogs } from '../Action/BlogAction';

const NewBlog = () => {
  const [image,setImage]= useState();
  const [title,setTitle]= useState();
  const [content, setContent]= useState();
  const dispatch = useDispatch();
  const submithandle = async(e) => {
    e.preventDefault();
    await dispatch(createBlog(title,content,image))
    setTitle('');
    setContent('');
    setImage('');
    window.location.reload();
  }


  return (
    <div className="addBlogContainer">
    <form className     ='blogForm'  onSubmit={submithandle} >
      <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} />
      <input type="text" placeholder='enter image url' value={image} onChange={(e)=>setImage(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
   </div>
  )
}

export default NewBlog