import React  from 'react'
import Logo from '../Logo/Logo'
import PLogo from "../ProfileLogo/PLogo"

// import Logo from "../../SwaasIcons/swaaslogo.svg"
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <header className='header'>
        {/* <Link to="/"> <div className="logo"></div></Link> */}
        <Link to="/"><Logo /></Link>
        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>
      </>
  
  )
}

export default Navbar
