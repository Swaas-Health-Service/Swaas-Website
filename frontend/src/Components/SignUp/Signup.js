import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Signup.css"
const Signup = () => {
  return (
    <div>
      <Navbar/>
      <div className="signup">
        <div className="signup-left">
          
        </div>
        <div className="signup-right">
          <h3>
            Create Account
          </h3>
          <form className='create-account'>
            <label>
              First Name
              <input type="text" name="name"/>
            </label>
            <label>
              Last Name
              <input type="text" name="LastName" />
            </label>
            <div>
            <label>
              E-Mail
              <input type="text" name="name" className='email'/>
            </label>
            </div>
            <label>
              Password
              <input type="password" name="name"/>
            </label>
            <label>
              Confirm Password
              <input type="password" name="name"/>
            </label>
            <div>
            <label>
              Addhar Number
              <input type="text" name="name" className='addhar'/>
            </label>
            </div>
            <label>
              UHI ID
              <input type="text" name="name" className='uhiid'/>
            </label>
            <div>
            Create your own UHI ID Click here to make one
            </div>
            <input  type='submit' value="Create Account"/>
          </form>

          Already have an account? Click here to login
        </div>
      </div>
    </div>
  )
}

export default Signup
