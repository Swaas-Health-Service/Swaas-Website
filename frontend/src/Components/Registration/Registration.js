import {Link} from 'react-router-dom'
import './Registration.css'
const Registration = () => {
    return (
        <div className='body'>
        <div className="registration  " >
            <div className="registration-container">
                <div className="full-height justify-content-center">
                    <div className="flex justify-center items-center h-screen col-12 text-center align-self-center py-5">
                        <div className="registration-section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3 text-white "><span className='bg-black py-2 mx-5 rounded-xl border-4 border-orange-400' >Log In </span><span className='mx-5 bg-black py-2 rounded-xl border-4 border-orange-400'>Sign Up</span></h6>
                              <input className="registration-checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                              <label for="reg-log"></label>
                            <div className="registration-card-3d-wrap mx-auto">
                                <div className="registration-card-3d-wrapper">
                                    <div className="registration-card-front">
                                        <div className="registration-center-wrap">
                                            <div className="registration-section text-center">

                                                <div className='blackbox'><h4 className="mb-4 pb-3">Log In</h4></div>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Login as Patient"/>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Login as Hospital"/>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Login as Doctor"/>
                                              </div>
                                          </div>
                                      </div>
                                    <div className="registration-card-back">
                                        <div className="registration-center-wrap">
                                                <div  className='blackbox'><h4 className="mb-4 pb-3">Registration</h4></div>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Register as Patient"/>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Register as Hospital"/>
                                                <input type="submit" className="registration-btn mt-4 btn" value="Register as Doctor"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
        </div>
    )
  }
  
  export default Registration