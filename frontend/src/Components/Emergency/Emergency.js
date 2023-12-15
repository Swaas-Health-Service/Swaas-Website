import React from 'react'
import "./Emergency.css"
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import PLogo from '../ProfileLogo/PLogo'
const Emergency = () => {
  return (
    <div>
      <header className='header'>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>

        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>

    <div id="medicalbook">
        <div>
            <h1>Emergency Medical Book Page</h1> 
            <p>Medical emergency? Contact with us in 60 seconds</p> 
            <button id="bookmedical" style={{marginLeft:"10rem"}}><a href="">Book Now</a></button>
        </div>
        <div className='medicalbookpic'>
                  </div>
    </div>
    <h1 id="hospitalnear">Hospital Nearby</h1>
    <div id="hospitallocdiv">
        <input id="hospitalloc" type="text" placeholder="City, State"/>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="/">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>

        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="/">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="/">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="/">View Now</a></button>
    </div>
<Footer/>    
</div>
  )
}

export default Emergency
