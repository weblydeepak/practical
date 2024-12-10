import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../Action/userAction';
import Header from '../../Component/Header';
import { loadBlogs } from '../../Action/BlogAction';
import  "../../Style/Home.css"
import BlogCard from '../../Component/BlogCard';
import NewBlog from '../../Component/NewBlog';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const islogin = useSelector(state=>state.user.isAuthenticated)
  const Blogs = useSelector(state=>state?.Blogs?.Blogs)
  const readMore=(id)=>{
   navigate(`/post/${id}`)
  // console.log(id);
}
const gotologin=()=>{
  navigate("/login")
 // console.log("login");
}
  
  useEffect(()=>{
    dispatch(loadBlogs())
  dispatch(loadUser())
  },[])
  return (
  <>
  <Header/>
  <div className="homeContainer">
   {Blogs&&
    <div className="right">
    <div className="firstBlog">
      <img className='firstBlogImage' src={Blogs[0]?.image} alt="" />
      <div className="firstBlogDetail">
        <h3>{Blogs[0]?.title}</h3>
        <p>{Blogs[0]?.content.split(" ").slice(0, 15).join(" ")} <span className='readMore' onClick={()=>readMore(Blogs[0]._id)}>Read More..</span></p>
      </div>
    </div>
    {
       Blogs.slice(1).map((Blog, index) => (
        <div key={index+1}  className="otherblog">
          <BlogCard readMore={readMore} blogs={Blogs?.[index+1]} />
        </div>
       ))}
    </div>
    }
    <div className="left">
   <h2>New Blogs</h2>
   
   {islogin?
    <NewBlog/>:<button onClick={gotologin} >go to login</button>}
    </div>

  </div>

  </>
  )
}

export default Home