import React from 'react'
import './OPD.css'

const OPD = () => {
    return (
            <div>
<header className='header'>
        <div className="logo"></div>
        <input type="text" id="textboxopd" placeholder="City,State" />
        <div className="profile-photo"></div>
      </header>
                
                        
                   
                <div id="opdbody">
                    <h1>Choose the Speciality of Doctor</h1>
                    <div id="opdimages">
                        <div class="opdimg">
                            <h2>Dentist</h2>
                            <div className="tooth"></div>
                            <input className="custom-radio"type="radio" name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h2>Cardiologist</h2>
                            <div className="stethoscope"></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h2>Physician</h2>
                        <div className="hand"></div>

                        <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h2>Gynecologist</h2>
                            <div className="bed"></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h2>Homeopath</h2>
                        <div className="homeo"></div>
                        <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h2>Ayurveda</h2>
                            <div className="yoga"></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                    </div>
                </div>

                <div className="footer"></div>
            </div>
            )
}

            export default OPD
