import React  from 'react'
import Logo from "../../SwaasIcons/swaaslogo.svg"
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='headerHome'>
            <div className="logo"></div>
            <div className="nav-bar">
                <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
                <Link to='/Teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
                <Link to='/MedicalReports'><div className='navbar-elements'>Medical Reports</div> </Link>
                <Link to='/OPD'><div className='navbar-elements'>Insurance</div></Link>
            </div>
            <div className="photoHome"></div>
        </header>
      </>
  
  )
}

export default Navbar
