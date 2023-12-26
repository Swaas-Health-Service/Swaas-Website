import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
const PatientLogin = () => {
  return (
    <div>
      <div className="loginbodypat">
        <div className='loginhead'>LOG IN AS PATIENT</div>
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

export default PatientLogin 