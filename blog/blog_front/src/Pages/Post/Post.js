import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../../Style/Post.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../Action/userAction';
import { deletePost, singleBlogLoad } from '../../Action/BlogAction';

const Post = () => {
  const param = useParams();
  const id = param.id
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin,setLogin]= useState(false);
  

  const { Blog } = useSelector((state) => state.Blog);
  
  const user = useSelector((state) => state.user?.user?._id);
 
  if (Blog) {
    console.log(Blog); 
  }
    
  useEffect(() => { 
    if (user && Blog && user === Blog.owner) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [user, Blog]);
 

  const gotoHome =()=>{
   navigate("/")
  }
  const edit =()=>{

  }

  const deleteBlog= async()=> {
     dispatch(deletePost(id))
    navigate("/")
  }


  useEffect(() => {
    dispatch(loadUser()); 
    if (param.id) {
      dispatch(singleBlogLoad(param.id));
    }
  
  }, [dispatch, param.id]);

  return (
    <div className="container ">
      <div className="postContainer">
        <h1>Post Page</h1>
        <div className="post">
          {Blog ? (
            <>
              <img src={Blog.image} alt="" /> 
              <div className="postDetails">
                <h2>{Blog.title}</h2>
                <p style={{ whiteSpace: 'pre-wrap' }}>{Blog.content}</p>
              </div>
            </>
          ) : (
            <div>No blog found.</div>
          )}
        </div>
       <div className="btnContainer">
          <button onClick={gotoHome}>Back</button>
          {isLogin&&<button onClick={edit}>Edit</button>}
          {isLogin&&<button onClick={deleteBlog}>Delete</button>}
        </div>
      </div>
    </div>
  );
};

export default Post;
