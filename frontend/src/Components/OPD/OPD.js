import React from 'react'
import './OPD.css'
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { indiancities } from './Location'
import PLogo from '../ProfileLogo/PLogo'

const OPD = () => {
    const handleOnSearch = (string, results) => {
        console.log(string, results);
      };
    
      const handleOnHover = (result) => {
        console.log(result);
      };
    
      const handleOnSelect = (item) => {
        console.log(item);
      };
    
      const handleOnFocus = () => {
        console.log("Focused");
      };
    
      const handleOnClear = () => {
        console.log("Cleared");
      };
    const formatResult = (indiancities) => {
        console.log(indiancities);
        return (
          <div className="result-wrapper">
            <span className="result-span">id: {indiancities.id}</span>
            <span className="result-span">name: {indiancities.name}</span>
          </div>
        );
      };
    return (
            <div>
<header className='header'>
        {/* <div className="logo"></div> */}
        <Link to="/"><Logo/></Link>
        <div className="SearchBox"style={{ width: 400,marginTop:"1rem" }}>
        
          <ReactSearchAutocomplete
            items={indiancities}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            styling={{ zIndex: 0 }} // To display it on top of the search box below
            autoFocus
          />
          </div>
        {/* <input type="text" id="textboxopd" placeholder="City,State" /> */}
      
        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>
                
                        
                   
                <div id="opdbody">
                    <h1 style={{marginBottom:"2rem"}}>Choose the Speciality of Doctor</h1>
                    <div id="opdimages">
                        <div class="opdimg">
                            <h3>Dentist</h3>
                            <div className="Adi"><div className="tooth"></div></div>
                            <input className="custom-radio"type="radio" name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h3>Cardiologist</h3>
                           <div className="Adi"> <div className="stethoscope"></div></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h3>Physician</h3>
                       <div className="Adi"> <div className="hand"></div>
                       </div>
                        <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h3>Gynecologist</h3>
                           <div className="Adi"> <div className="bed"></div></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h3>Homeopath</h3>
                       <div className="Adi"> <div className="homeo"></div></div>
                        <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                        <div class="opdimg">
                            <h3>Ayurveda</h3>
                           <div className="Adi"> <div className="yoga"></div></div>
                            <input type="radio" className="custom-radio"name="programmingLanguage" value="Ruby"></input>
                        </div>
                    </div>
                </div>

                {/* <div className="footer"></div> */}
                <Footer/>
            </div>
            )
}

            export default OPD
