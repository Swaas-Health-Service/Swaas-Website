import React from 'react'
import "./Doctors.css";
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer';
import PLogo from '../ProfileLogo/PLogo';
const Doctors = () => {
  return (
    <div>
       <header className="header">
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>
<Link to="/Profile"><PLogo/></Link>
        {/* <div className="profile-photo"></div> */}
    </header >
    <div className="infoDoc">XXX Available Doctors Now </div>
    <div className="profileDoc-info">
        <div className="photoDoc"></div>
        <div className="ins">
            <p id="ins1">Name,Experience</p>
            <p id="ins2">18 year experience overall</p>
            <p id="ins3">All these expertises</p>
            <p id="ins4"><a href="/">View Profile</a></p>
            <p id="ins5">Address</p>
            <div className="button1">100%</div>
        </div>
        <div className="buttonDoc">
            <button className="btnDoc">Connect Now</button>
            <p className="btn-info">500 Consultation Fee</p>
        </div>
    </div>
    <div className="profileDoc-info">
        <div className="photoDoc"></div>
        <div className="ins">
            <p id="ins1">Name,Experience</p>
            <p id="ins2">18 year experience overall</p>
            <p id="ins3">All these expertises</p>
            <p id="ins4"><a href="/">View Profile</a></p>
            <p id="ins5">Address</p>
            <div className="button1">100%</div>
        </div>
        <div className="buttonDoc">
            <button className="btnDoc">Connect Now</button>
            <p className="btn-info">500 Consultation Fee</p>
        </div>
    </div>
    <div className="profileDoc-info">
        <div className="photoDoc"></div>
        <div className="ins">
            <p id="ins1">Name,Experience</p>
            <p id="ins2">18 year experience overall</p>
            <p id="ins3">All these expertises</p>
            <p id="ins4"><a href="/">View Profile</a></p>
            <p id="ins5">Address</p>
            <div className="button1">100%</div>
        </div>
        <div className="buttonDoc">
            <button className="btnDoc">Connect Now</button>
            <p className="btn-info">500 Consultation Fee</p>
        </div>
    </div>
    <div className="profileDoc-info">
        <div className="photoDoc"></div>
        <div className="ins">
            <p id="ins1">Name,Experience</p>
            <p id="ins2">18 year experience overall</p>
            <p id="ins3">All these expertises</p>
            <p id="ins4"><a href="/">View Profile</a></p>
            <p id="ins5">Address</p>
            <div className="button1">100%</div>
        </div>
        <div className="buttonDoc">
            <button className="btnDoc">Connect Now</button>
            <p className="btn-info">500 Consultation Fee</p>
        </div>
    </div>
<Footer/>    </div>
  )
}

export default Doctors
