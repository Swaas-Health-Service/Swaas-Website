import React from 'react'
import "./PatientProfile.css"
import { useLocation,useNavigate } from 'react-router-dom';

const PatientProfile = () => {
  const location = useLocation();
  const navigate=useNavigate();
  const userData = location.state?.data || {}; // Access the state


  const handleSubmit = (e) => {
    
    navigate('/PatientRegister');

  }
  return (
    <>
      <header className="header">
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>
      <div className="PatientProfileHeading">My Profile</div>
      <div className='PatientProfileDiv'>
        <div className="detailsImagePatient"><div className="userImage">{userData.image ? (
            <img src={URL.createObjectURL(userData.image)} alt="upload image" className="img-display-after" />
          ) : (
            <div className="img-display-before" />
          )}</div></div>
        <div className="registrationDetails">

          <div className="detailsHeading">
            Registration Details
          </div>
          <div className="details">
            <div className="DetailsForm">

              <div className="doc-sign">
              <table>
      <tbody className='tableBody'>
        
          <tr  className='table'>
            <td><strong className='tableHeading'>Name:</strong></td>
          <td className="tableDetail">{userData.firstName}</td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>DOB:</strong></td>
              <td className="tableDetail">{userData.dob}</td>
            </tr>
            <tr className='table'>
            <td><strong className='tableHeading'>Email:</strong></td>
              <td className="tableDetail">{userData.email}</td>

                      </tr>
                      <tr className='table' >
            <td><strong className='tableHeading'>Aadhar Number:</strong></td>
              <td className="tableDetail">{userData.aadhar}</td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>Gender:</strong></td>
              <td className="tableDetail">{userData.gender}</td>
            </tr>
            <tr  className='table'>
            <td><strong className='tableHeading'>Age:</strong></td>
              <td className="tableDetail">{userData.age}</td>
            </tr>
            <tr  className='table'>
            <td><strong className='tableHeading'>Phone Number:</strong></td>
              <td className="tableDetail">{userData.phone}</td>
            </tr>
            <tr className='table' >
            <td><strong className='tableHeading'>Pincode:</strong></td>
              <td className="tableDetail">{userData.pincode}</td>
            </tr>
        
      </tbody>
    </table>
              </div>
              <button onClick={handleSubmit} className="doc-btn">Edit</button>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default PatientProfile
