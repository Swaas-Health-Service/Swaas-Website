import React from "react";
import "./doctor.css";
import logo from "../../SwaasIcons/swaaslogo.png";

export default function Doctorprofile() {
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
          <h4>Home</h4>
        </div>
        <div>
          <h4>My profile</h4>
        </div>
        <div>
          <h4>Settings</h4>
        </div>
        <div>
          <h4>Opd-bookings</h4>
        </div>
        <div>
          <h4>Teleconsultations</h4>
        </div>
      </div>
      <div className="swasslogo-bar">
        <img src={logo} alt="Logo" />
      </div>
      
      
      
      <div className="doctorprofilebar">
        <div className="doctorprofile">
          <h5>
            Health Mentor
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
              onClick={() => {
                document.querySelector(".sidebar").style.width = "18vw";
              }}
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 11h16v2H4v-2zm0-4h16v2H4V7zm0 8h16v2H4v-2z" />
            </svg>
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
