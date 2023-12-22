import React from 'react'
import './LoginPatient.css'
import {link} from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar'
const LoginPatient = () => {
  return (
    <div>
      <Navbar/>
      <div className="loginbodypat">
        <div className='loginhead'>LOG IN</div>
          <div className='loginhorizontal'>
            <div className='docsymbol'></div>
            <div className="loginbox">
              <div ><input type="text" className="enterbox" placeholder="Enter your email/ mobile number" /></div>
              <div><input type="text" className="enterbox" placeholder="Enter password" /></div>
              <div className='forgotpass'>Forgot password?</div>
            </div>
            <div className='docsymbol'></div>
          </div>
      </div>
    </div>
  )
}

export default LoginPatient
