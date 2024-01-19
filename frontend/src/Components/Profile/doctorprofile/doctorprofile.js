import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";
import swaaslogo from "../../SwaasIcons/swaaslogo.png";

const DoctorProfile=()=> {
  return (
    <div className="doctordashboardright">
      <div className="sidebar">
        <div
          className="close-btn"
          onClick={() => (document.querySelector(".sidebar").style.width = "0")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
        <div>
          <Link to="" className="doctor-dashboard-options">Home</Link>
        </div>
        <div>
          <Link to="" className="doctor-dashboard-options">My Profile</Link>
        </div>
        <div>
          <Link to="" className="doctor-dashboard-options">Settings</Link>
        </div>
        <div>
          <Link to="" className="doctor-dashboard-options">OPD Bookings</Link>
        </div>
        <div>
          <Link to="" className="doctor-dashboard-options">TeleConsultation</Link>
        </div>
      </div>
      {/* <div className="swasslogo-bar">
        <img src={swaaslogo} alt="Logo" />
      </div> */}
      
      
      
      <div className="doctorprofilebar">
      <img src={swaaslogo} alt="Logo" className="swaas-logo"/>
      <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              viewBox="0 0 24 24"
              onClick={() => {
                document.querySelector(".sidebar").style.width = "15vw";
              }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 11h16v2H4v-2zm0-4h16v2H4V7zm0 8h16v2H4v-2z" />
            </svg>
        <div className="doctorprofile">
          <h5>
            Health Mentor
            
          </h5>
        </div>
        <div>
        
          <div className="profilephoto"></div>
          <div className="doctorprofilename">Dr. Sagar Kumar Singh</div>
          <div className="doctorprofileID">Dr. ID: 1234456667</div>
          <div className="doctorphonenumber">+91 93029 19931</div>
        </div>
      </div>
      
      
    </div>
  );
}

export default DoctorProfile;
