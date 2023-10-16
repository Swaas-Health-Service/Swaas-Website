import React from 'react'
import "./BillsandInsuarance.css"
const BillsandInsuarance = () => {
  return (
    <div>
     <header className='header'>
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>

          <div id="bills">
        <div className='billimg'></div>
        <div id="billtext">
            <h1>Pay The Bills Online, Safe and Secured</h1>
            <h2>Simplify medical bill payments online</h2>
            <p> Our secure online payment portal streamlines the process of settling your medical bills quickly and conveniently, ensuring a hassle-free experience.</p>
            
            <button id="pay">Let's Pay</button>
        </div>
    </div>
    <div id="insurance">
        <div id="insurancetext">
            <h1>Still In Need Of Health Insurance?</h1> 
            <h2>When the unexpected happens, we are here for you.</h2> 
            <p>You can enroll in or change plans if you have cerain life events or income range, or you qualify for Medical or CHIP</p>
            
            <button id="insure" style={{marginLeft:"240px"}}><a href="/">Get Started</a></button>
        </div>
        <div className='insuranceimg'>
        </div>
    </div>
    
    <h1>Buy Our Insurance</h1>
    <div className="review">
          <p>Reviews</p>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default BillsandInsuarance
