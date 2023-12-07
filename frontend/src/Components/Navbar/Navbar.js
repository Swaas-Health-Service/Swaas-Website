import React  from 'react'
import Logo from "../../SwaasIcons/swaaslogo.svg"
import {Link} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='headerHome'>
            <Link to='/'><div className="logo"></div></Link>
            <div className="nav-bar">
                <Link to='/OPD'><div className='navbar-elements'>OPD Booking</div></Link>
                <Link to='/Teleconsultation'><div className='navbar-elements'>Teleconsulation</div></Link>
                <Link to='/MedicalReports'><div className='navbar-elements'>Medical Reports</div> </Link>
                <Link to='/BillsandInsuarance'><div className='navbar-elements'>Insurance</div></Link>
            </div>
            <Link to='/Profile'><div className="photoHome"></div></Link>
        </header>
      </>
  
  )
}

export default Navbar
