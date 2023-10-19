import React from 'react'
import './Emergency.css'
import medicalbook from './images/medicalbookpic.png'
import Navbar from '../Navbar/Navbar'
const Emergency = () => {
  return (
    <div>
        <Navbar/>
        {/* <div className='nav'>
          <div id="swaaslogo">
              <img src={logo} alt="" />
          </div>
          <div >
              <img src={user} alt="" />
          </div>
        </div> */}
      <div id="medicalbook">
          <div>
              <h1>Emergency Medical Book Page</h1> <br/>
              <p>Medical emergency? Contact with us in 60 seconds</p> <br/>
              <button id="bookmedical"><a href="/">Book Now</a></button>
          </div>
          <div>
              <img src={medicalbook} alt="" />
          </div>
      </div>
      <h1 id="hospitalnear">Hospital Nearby</h1>
      <div id="hospitallocdiv">
          <input id="hospitalloc" type="text" placeholder="City, State" />
      </div>
      <div className="hospitaldetail">
          <div>
              <img src="" alt="" />
          </div>
          <div>
              <h2>Name of Hospital</h2>
              <p>Famous:</p>
              <p>address</p>
          </div>
          <button><a href="/">View Now</a></button>
      </div>
      <div className="hospitaldetail">
          <div>
              <img src="" alt="" />
          </div>
          <div>
              <h2>Name of Hospital</h2>
              <p>Famous:</p>
              <p>address</p>
          </div>
          <button><a href="/">View Now</a></button>
      </div>
      <div className="hospitaldetail">
          <div>
              <img src="" alt="" />
          </div>
          <div>
              <h2>Name of Hospital</h2>
              <p>Famous:</p>
              <p>address</p>
          </div>
          <button><a href="/">View Now</a></button>
      </div>
      <div className="hospitaldetail">
          <div>
              <img src="" alt="" />
          </div>
          <div>
              <h2>Name of Hospital</h2>
              <p>Famous:</p>
              <p>address</p>
          </div>
          <button><a href="/">View Now</a></button>
      </div>
      <footer></footer>
    </div>
  )
}

export default Emergency
