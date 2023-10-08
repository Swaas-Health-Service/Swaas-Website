import React from 'react'
 import "./Login.css";

const Login = () => {
  return (
    <div>
      <>
    <nav className="navbar navbar-light bg-light justify-content-between">
        <a href="/" className="navbar-brand">Swaas</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
         
        </form>
      </nav>
    <div className='body'>
      <div className='left-area'>
        <div>Logo</div>
      </div>
      <div className='right-area'>
        <header>
          <h2 style={{textAlign:"center"}}>Log-In</h2>
        </header>
        <form className='SignUpForm'>
          
          <div>
            <label htmlFor="Email" className="FirstName">Email</label>
            <input type="text" style={{width:"50%"}} id="Email" className="form-control"/>
          </div>
          <div>
            <label htmlFor="Password"  className="Password">Password</label>
            <input type="password" style={{width:"50%"}} id="Password" className="form-control"/>
          </div>
          <div className="text-center">
            <div style={{marginTop:"10px"}}> 
          <a  href="/">Forget Password</a>
          </div>
          <div style={{ marginTop: "10px" }} className="form-check text-center">
  <input className="form-check form-check-inline" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Login with OTP instead of password
  </label>
</div>

<div className='text-center'>
<button type="button"  style={{width:"25%",margin:"10px"}}class="btn btn-primary btn-lg text-center">Login</button>
</div>
Don't have an account <a style ={{}}href="/">Click here</a>
</div>
        </form>
       
      </div>
    </div>
    </>
 
    </div>
  )
}

export default Login
