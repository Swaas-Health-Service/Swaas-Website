import React  from 'react'
import Logo from "../../SwaasIcons/swaaslogo.svg"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>        <div className="logo">
          <img src={Logo} alt=''/>
        </div>
        <div className="services">

            <Link to="/OPD">OPD Booking</Link>
            <Link to="/Teleconsultation">Teleconsultation</Link>
            <Link to="/Pathology">Pathology</Link>
            <Link to="/Insurance">Insurance</Link>

            
        </div>
        <div className="profile"></div>
        </nav>
      </>
  
  )
}

export default Navbar
