import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Facebook</h3>
                <span className='loginDisc'>
                    Connect with Friends and world around youon Facebook.
                </span>
            </div>
            <div className='loginRight'>
                <div className="loginBox">
                    <input placeholder='Email'
                    className='loginInput'/>
                     <input placeholder='Password'
                    className='loginInput'/> 
    <span className="loginForgot">Forgot Password?</span>
                    <button className='loginRegisterButton'>Create a New Account</button>         
             </div>
            </div>
        </div>
    </div>
  )
}
