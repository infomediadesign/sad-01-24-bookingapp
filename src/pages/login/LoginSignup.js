import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./login.css"
import {
  faEnvelope,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function LoginSignup() {

  const [action, setAction] = useState("Login")
  return (
    <div className='loginContainer'>
    <div className='loginHeader'> 
      <div className='loginText'>{action}</div>
      <div className='loginInputs'>
      {action==="Login"?<div></div> : <div className='loginInput'>
      <FontAwesomeIcon icon={faUser} className='loginImg'/>
      <input type='Text' placeholder='Name'></input>
        </div> }
      

        <div className='loginInput'>
      <FontAwesomeIcon icon={faEnvelope} className='loginImg'/>
    <input type='email' placeholder='Email Id'></input>
        </div> 

        <div className='loginInput'>
      <FontAwesomeIcon icon={faKey} className='loginImg'/>
    <input type='password' placeholder='Password'></input>
        </div> 

      </div>
      {action==="Sign Up"?<div></div> : <div className='forget-passoword'>Forget passoword ?  
      <span>click here</span></div> }
      <div className='submit-container'>
        <div className={action==="Login"?"loginSubmit gray" : "loginSubmit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==="Sign Up"?"loginSubmit gray" : "loginSubmit"} onClick={()=>{setAction('Login')}}>Login</div>
      </div>
    </div>

    </div>
  
  )
}

export default LoginSignup