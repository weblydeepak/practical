import React, { useEffect, useState } from 'react'
import "../../Style/Login.css"
import { useDispatch } from 'react-redux';
import {login} from "../../Action/userAction";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // global state 

     //    local state 
    const  [account, setaccount]= useState("login")
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();


    // const [error, setError] = useState(null);
   
    const loginHandle = async(e)=>{
        e.preventDefault();
        // console.log("email" + email);
        // console.log("password" + password);
      dispatch(login(email,password));
      navigate("/")
    
    }

    const registerHandle =(e)=>{
        e.preventDefault();

        // console.log("name: " + name);
        // console.log("email" + email);
        // console.log("password" + password);

       
    }


    const Toggleto =(e)=>{
       account ==="login"? setaccount("register"): setaccount("login")
    }
    
  return (
  <div className="LoginPage center">
    {
    account  === "login"?
        (<div className="Loginform ">
        <h1>Login Page</h1>
        <form onSubmit={loginHandle}>
          <input type="email" 
           placeholder="email"
           onChange={(e) =>setEmail(e.target.value)}/>
          <input type="password" 
          placeholder="Password"
          onChange={(e) =>setPassword(e.target.value)} />
          <button type="submit" >Login</button>
          <span>or</span>
        </form>
        <p >Don't have an account? <a href="#"
         onClick={()=>Toggleto()}
         >Register</a></p>
    </div>)
    :
    (
    <div className="Loginform ">
        <h1>Register Page</h1>
        <form onSubmit={registerHandle}>
          <input type="text" 
          placeholder="Username" 
          onChange={(e) =>setName(e.target.value)}/>
          <input type="email"
           placeholder="email"
           onChange={(e) =>setEmail(e.target.value)} />
          <input type="password" 
          placeholder="Password" 
          onChange={(e) =>setPassword(e.target.value)}/>
          <button type="submit">Register</button>
        <span>or</span>
        </form>
        <p>Aldready have an account? <a href="#" 
        onClick={()=>Toggleto()}
        >Login</a></p>
    </div>)
    }
   </div>
  )

}
export default Login