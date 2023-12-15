import React from 'react'
import "./MentalHealth.css"
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Review from '../Review/Review'
import PLogo from '../ProfileLogo/PLogo'
const MentalHealth = () => {
  return (
    <div >
      <header className='header'>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>
        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>
      <main className='Main'>
          <div className="info">
              <div className="heading">
                  <p className="HI HI1">Discover Mental Health Care</p>
                  <p className="HI HI2">Solution</p>
                  <p className="info1">Online Councilling Threapy With Top</p>
                  <p  className="info1">Physiologist Any time, Any where, Any device</p>
                  <button className="button" id="button1">View Our Counselor</button>
              </div>   
          </div>
          <div className="photo1"></div>
          
      </main>
      <p className="INF-H">Choose Help. Not Suffering.</p>
      <div className="info2">
          <div className="photo2Mental"></div>
          <div className="info3">
              <p className="para">Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process.</p>
          <button id="button2">Get Started</button>
          </div>
      </div>
      <p className="INF-H">Specialised Help For Your Mental Health</p>
      <div className="nav">
          <div className="nav1"><a href="/">Anexiety & Stress</a></div>
          <div className="nav1"><a href="/">Depression</a></div>
          <div className="nav1"><a href="/">Relationship  Issues</a></div>
          <div className="nav1"><a href="/">OCD</a></div>
          <div className="nav1"><a href="/">Bipolar Disorder</a></div>
          <div className="nav1"><a href="/">Psyochosis</a></div>
          <div className="nav1"><a href="/">Grief & Loss</a></div>
          <div className="nav1"><a href="/">Trauma</a></div>
          <div className="nav1"><a href="/">Relationship Issues</a></div>
          <div className="nav1"><a href="/">Sexual Issues</a></div>
      </div>
      <Review/>
      {/* <div className="review">
          <p>Reviews</p>
      </div> */}
      {/* <div className="footer"></div> */}
      <Footer/>
    </div>
  )
}

export default MentalHealth
