import React from 'react'
import "./Emergency.css"
const Emergency = () => {
  return (
    <div>
      <header className='header'>
        <div className="logo"></div>
        <div className="profile-photo"></div>
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
        <button><a href="">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>

        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="">View Now</a></button>
    </div>
    <div class="hospitaldetail">
    <div className="photoDocEmer"></div>
        <div>
            <h2>Name of Hospital</h2>
            <p>Famous:</p>
            <p>address</p>
        </div>
        <button><a href="">View Now</a></button>
    </div>
    <footer></footer>
    </div>
  )
}

export default Emergency
