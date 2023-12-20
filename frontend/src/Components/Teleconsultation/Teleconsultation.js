import React from 'react'
import "./Teleconsultation.css";
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import PLogo from '../ProfileLogo/PLogo';
const Teleconsultation = () => {
  return (
    <div>
       <header className='header'>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>
                {/* <div className="profile-photo"></div> */}
                <Link to="/Profile"><PLogo/></Link>
    </header>
    <div className='mainTele'>
        <div className="Teleinfo">
            <div className="headingTele">
                <p className="TeleHI1">Skip The Travel!</p>
               <p className="TeleHI2">Take Online Doctor Consultation</p>
               <p className="Teleinfo1">Private Consultation + Audio Call : Starts at just 199</p>
               <p  className="Teleinfo1">+ 124 Doctors are online</p>
              <div className="Adi"> <div className="button" id="button1">Consult Now</div>
              </div> <p className="infoLinks"> <a href="/" className="VD">Verified Doctors</a> <a href="/" className="DP">Digital Prescription</a> <a className="FF" href="/">Free Fellowship</a>  </p>
            </div>
        </div>
        <div className="photo1Tele"></div>
    </div >
    <div className="specialities">
        <div className="heading-specialities">
            <h2>Specialities</h2>
            <p className="SP1">Consult with top doctors across specialities</p>
            <div className="communication">
                <div className="comm1">
                    <div className="photo2"></div>
                    <div className="info-com">
                        <a href="/">Gyanecology</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo3"></div>
                    <div className="info-com">
                        <a href="/">Sexology</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo4"></div>
                    <div className="info-com">
                        <a href="/">General Physician</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo5"></div>
                    <div className="info-com">
                        <a href="/">Stomach and Digestion</a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <div className="specialities">
        <div className="heading-specialities">
            <h2>Common Health Concern</h2>
            <p className="SP1">Consult a Doctor online for any health issue</p>
            <div className="communication">
                <div className="comm1">
                    <div className="photo6"></div>
                    <div className="info-com">
                        <a href="/">Cold and Cough?</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo7"></div>
                    <div className="info-com">
                        <a href="/">Performance issue?</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo8"></div>
                    <div className="info-com">
                        <a href="/">Period problem</a>
                    </div>
                </div>
                <div className="comm1">
                    <div className="photo9"></div>
                    <div className="info-com">
                        <a href="/">Skin problem</a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <Review/>
    {/* <div className="review">
        <p>Reviews</p>
    </div>
    <div className="footer"></div>  */}
    <Footer/>
    </div>
  )
}

export default Teleconsultation
