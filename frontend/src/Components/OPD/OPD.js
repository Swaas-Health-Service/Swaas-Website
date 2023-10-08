import React from 'react'
import './OPD.css'
const OPD = () => {
  return (
    <div>
      
            <nav className="navbar navbar-light bg-light justify-content-between">
              
              <a href="/" className="navbar-brand"><img src="./images/SwaasOfficialLogo_Original.png" alt=''/>Swaas</a>
              <form className="form-inline">
                <div className='searchbar'>
                  <i className="fa-solid fa-location-dot fa-xl searchicon"></i>
                  <input className="form-control mr-sm-2" type="search" placeholder="City,State" aria-label="Search" />
                </div>
              </form>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person " viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg> <i  className="bi bi-person"></i>
            </nav> 
            <h2 className="text-center">Choose Your Specialty of Doctor</h2>
            <div className="center"></div>
            <div className="row">
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="./images/Dentist-removebg-preview.png" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Dentist</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Surgeon</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="C:\Users\DELL\Desktop\Swaas\Website\frontend\Swaas-Website-FrontEnd\src\Components\OPD\elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Homeopathy</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="C:\Users\DELL\Desktop\Swaas\Website\frontend\Swaas-Website-FrontEnd\src\Components\OPD\elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Ayurveda</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="src\Components\OPD\elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Physician</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
              <div className="col-md-2">
              <div className="card"  style={{width:"200px"}}>
        <img src="C:\Users\DELL\Desktop\Swaas\Website\frontend\Swaas-Website-FrontEnd\src\Components\OPD\elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Gyanecologist</h5>
          <p className="card-text">Doctors at your tips</p>
          <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
        </div>
      </div>
              </div>
            </div>
            <div className="text-center my-5">
            <button type="button" className="btn btn-light" style={{background:"linear-gradient(#99E5A2,#41D8DD)",border:"3px solid green",width:"10vw"}}>
              <i className="fas fa-search"></i> Search
            </button>
            </div>
          </div>
  )
}

export default OPD
