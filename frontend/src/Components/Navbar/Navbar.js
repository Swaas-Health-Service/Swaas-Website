import React from 'react'
import Logo from "../../SwaasIcons/swaaslogo.svg"
const Navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt=''/>
        </div>
        <div className="services">
            <div>OPD Booking</div>
            <div>Teleconsultation</div>
            <div>Medical Reports</div>
            <div>Insurance</div>
        </div>
        <div className="profile"></div>
      </div>
    </div>
  )
}

export default Navbar
