import React from 'react'
 import "./Login.css";

const Login = () => {
  return (
    <div>
      <header className='header'>
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>
    <div id="loginpage">
        <div className="loginpic">
            
        </div>
        <div id="lgin">
            <h1>Log in</h1>
            
            <h4>Mobile number/email id</h4>
            <input type="text" class="logintext"/>
            
            <h4>Password</h4>
            <input type="password" class="logintext"/>
           
            <h4 id="forgotp"><a href="">Forgot Password?</a></h4>
            
            <div id="loginbox">
                <input type="checkbox" id="loginbox"/> <h4>Login with OTP instead of password</h4>
            </div>
            <button id="loginbutton"><a href="">Log in</a></button>
           
            <h4 style={{marginTop:"20px"}}>Don't have an account? <a href="">Click here</a></h4>
        </div>
    </div>
    </div>
  )
}

export default Login
