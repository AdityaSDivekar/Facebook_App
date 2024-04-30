import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='login'>
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className='loginLogo'>Facebook</h3>
            <span className='loginDisc'>
                Connect with Friends and world around you on Facebook.
            </span>
        </div>
        <div className='loginRight'>
            <div className="loginBox">
            <input placeholder='Username'
                className='loginInput'/>
                <input placeholder='Email'
                className='loginInput'/>
                 <input placeholder='Password'
                 type='password'
                className='loginInput'/> 
<span className="loginForgot">Forgot Password?</span>
                <button className='loginRegisterButton'>Create a New Account</button>   
                <button className='loginRegisterButton'>Sign In ?</button>      
         </div>
        </div>
    </div>
</div>  )
}
