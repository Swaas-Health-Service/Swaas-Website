import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'

import "./Signup.css"
const Signup = () => {
  return (
    <div>
      <header>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>

        <div className="profile-photo"></div>
      </header>
      <div className="signup-sidebar">
        <div className="signup-heading">Company Moto</div>
        <div className="signup-photo"></div>
      </div>
      <div className="signup-main">
        <div className="signup-main-info">
          <div className="signup-main-heading">Create Account</div>
          <div className="signup-info-box">
            <div className="signup-box-firstname">
              <div className="name-int">First Name</div>
              <input type="text" style={{ marginLeft: "14px" }} placeholder="" className="name-inp" />
            </div>
            <div className="signup-box-lastname">
              <div className="name-int" style={{ marginLeft: "0px" }}>Last Name</div>
              <input type="text" placeholder="" className="name-inp" />
            </div>
            <div className="signup-box-email">
              <div className="signup-int">Email ID</div>
              <input type="text" placeholder="" className="signup-inp" />
            </div>
            <div className="signup-box-password">
              <div className="signup-int">Password</div>
              <input type="password" placeholder="" className="signup-inp" />
            </div>
            <div className="signup-box-addhar">
              <div className="signup-int">Addhar No.</div>
              <input type="text" placeholder="" className="signup-inp" />
            </div>
            <div className="signup-box-uhi">
              <div className="signup-int">UHI ID</div>
              <input type="text" placeholder="" className="signup-inp" />
            </div>
            <div className="signup-box-submit">
              <p className="for-uhi">create your own UHI id.<a href="/">Click Here</a> to make one</p>
              <button className="signup-btn">Create Account</button>
              <p className="for-uhi" style={{marginTop:"8px"}} >Already have an account.<a href="/">Click Here</a> to signup</p>
            </div>
          </div>
          <div className="SignUPblank"></div>
          <div className="socialmedia">
            <button className="media-btn"><i className="fa-brands fa-google"></i> Sign up with Google</button>
            <button className="media-btn"> </button>
            <button className="media-btn"><i className="fa-brands fa-facebook"></i> Sign up with Facebook</button>
            <button className="media-btn"><i className="fa-brands fa-x-twitter"></i> Sign up with Twitter</button>
          </div>
        </div>
      </div>    </div>
  )
}

export default Signup
