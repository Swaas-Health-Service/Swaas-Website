import React from 'react';
import "./HomePage.css";
import { Link } from 'react-router-dom';
const HomePage = () => {
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
    <div className="infoHome">
        <div className="text-infoHome">
            <div className="msg">We Are Ready To Help & Take Care Of Your Medical Health</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eaque quos debitis dignissimos quam nam rerum quis voluptatum minus totam beatae, non, provident unde velit labore sapiente fugiat ea veritatis.</p>
        <button id="toknow">Know About Us</button>
        </div>
        <div className="image-info1"></div>
    </div>
    <div className="communicationHome">
        <div className="commHome1">
            <div className="img-com1"></div>
            <div className="info-comHome">
                <a className='info-comHome a' href="/Emergency">EMERGENCY</a>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com2"></div>
            <div className="info-comHome">
                <a href="/Teleconsultation">Teleconsultation</a>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com3"></div>
            <div className="info-comHome">
                <a href="/MentalHealth">Mental Health Care</a>
                <p>Connect within 60s</p>
            </div>
        </div>
        <div className="commHome1">
            <div className="img-com4"></div>
            <div className="info-comHome">
                <a href="/Pathology">Pathology & Reports</a>
                <p>Connect within 60s</p>
            </div>
        </div> 
    </div>
    <div className="infoHome2">
        <div className="image-info2 "></div>
        <div className="text-infoHome">
            <div className="msg">OPD Booking</div>
            <p>OPD Booking on our website allows you to conviniently schedule non emergency medical appointment with your preffered healthcare providers,ensuring timly access to outpatient healthcare services.</p>
        <button id="toknow">Click here</button>
        </div>
        </div>
        <div className="infoHome2">
            <div className="text-infoHome">
                <div className="msg">Bills & Insurance</div>
                <p>On our website,delve into the intricacies of medical bills and insurance to gain insights into healthcare expenses and discover how insurance plays a vital role in managing and reducing these costs. </p>
                <button id="toknow">Click here</button>
            </div>
            <div className="image-info3"></div>
        </div>
        <div className="infoHome2">
            <div className="image-info4"></div>
            <div className="text-infoHome">
                <div className="msg">Medical shop</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic vel architecto unde. Pariatur aspernatur, tempora quisquam quasi ut architecto, quia et a, aperiam consequuntur at omnis consectetur enim ex? </p>
                <button id="toknow">Click here</button>
            </div>
        </div>
        <div className="blank"></div>
        <div className="review">
       <div className="review-info">REVIEWS</div>
        </div>
        <div className="contactus">
            <div className="contact-info">
            <div className="logonew"></div>
            <p className="icons"><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-x-twitter"></i><i className="fa-brands fa-linkedin"></i></p>
        </div>
        </div>
    </>
  )
}

export default HomePage
