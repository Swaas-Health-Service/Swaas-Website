import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Navbar/>
      <div className='profile'>
        <div className='profile-left'>
          
        </div>
        <div className='profile-right'>
          <h3>My Profile</h3>
          <form>
            <label>
              Name
            <input type='text' placeholder='First Name'></input>
            <input type='text' placeholder='Middle Name'></input>
            <input type='text' placeholder='Last Name'></input>
            </label>
            <label>
              Date of Birth
            <input type='text'></input>
            </label>
            <label>
              Age
            <input type='text'></input>
            </label>
            <label>
              Gender
            <input type='text'></input>
            </label>
            <label>
              Contact Number
            <input type='text'></input>
            </label>
            <label>
              Emergency Contact Number
            <input type='text'></input>
            </label>
            <label>
              Email Id
            <input type='text'></input>
            </label>
            <label>
              UHI ID
            <input type='text' ></input>
            </label>
            <label>
              Insurance Adopted
            <input type='text'></input>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
