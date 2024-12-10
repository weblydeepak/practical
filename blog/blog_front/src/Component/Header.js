import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logout } from '../Action/userAction';
import { useNavigate } from 'react-router-dom';
import "../Style/Header.css"

const Header = () => {
  const isLogin  = useSelector(state=>state.user.isAuthenticated)
  const dispatch = useDispatch();
  const navigate= useNavigate()
  
const handleLogOut=()=>{
  dispatch(logout())
}

const handleLogin=()=>{
  // redirect to login page
  navigate("/login")
}


  useEffect(()=>{
  dispatch(loadUser())
  },[])

  return (
    <div className="navBar">
    <div className='Hearder'>
      <p className='midLogo'>Blog <span className='it'>it</span><span className='dot'>.</span></p>
    </div>
    {isLogin ?(<button onClick={handleLogOut} className='logoutBtn'>logout</button>) :(<button onClick={handleLogin} className='logoutBtn'>login</button>)}
    </div>
  )
}
export default Header