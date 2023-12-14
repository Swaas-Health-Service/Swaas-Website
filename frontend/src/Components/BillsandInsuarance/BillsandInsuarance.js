import React from 'react'
import "./BillsandInsuarance.css"
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Review from '../Review/Review'
import PLogo from '../ProfileLogo/PLogo'

const BillsandInsuarance = () => {
  return (
    <div>
     <header className='header'>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>

        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>

          <div id="bills">
        <div className='billimg'></div>
        <div id="billtext">
            <h1>Pay The Bills Online, Safe and Secured</h1>
            <h2>Simplify medical bill payments online</h2>
            
            <p style={{color:"#6999B3",fontSize:"1.1rem"}}> Our secure online payment portal streamlines the process of settling your medical bills quickly and conveniently, ensuring a hassle-free experience.</p>
            
            <button id="pay"><a href="/">Let's Pay</a></button>
        </div>
    </div>
    <div id="insurance">
        <div id="insurancetext">
            <h1>Still In Need Of Health Insurance?</h1> 
            <h2>When the unexpected happens, we are here for you.</h2> 
            <p style={{color:"#6999B3",fontSize:"1.1rem"}}>You can enroll in or change plans if you have cerain life events or income range, or you qualify for Medical or CHIP</p>
            
            <button id="insure" style={{marginLeft:"240px"}}><a href="/">Get Started</a></button>
        </div>
        <div className='insuranceimg'>
        </div>
    </div>
    
    <h1>Buy Our Insurance</h1>
    <Review/>
    {/* <div className="review">
          <p>Reviews</p>
      </div> */}
   {/* <div className="footer"></div> */}
   <Footer/>
  </div>
  )
}

export default BillsandInsuarance
