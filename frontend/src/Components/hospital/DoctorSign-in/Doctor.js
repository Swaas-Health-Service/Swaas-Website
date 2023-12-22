import React from "react";
import "./Doctor.css";
import { Link } from "react-router-dom";

function DoctorSignIn() {
  return (
    <>
      <header className="header">
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>
      <div className="sign-photo"></div>
      <div className="d-sign-in">
        <h2>Sign Up</h2>
        <form method="post" action="/">
          <div className="doc-sign">
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                DoctorId
              </label>
              <br />
              <input
                placeholder=" enter your Id"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Name
              </label>
              <br />
              <input
                placeholder=" enter your Name"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Email
              </label>
              <br />
              <input
                placeholder=" enter your Email"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Phone Number
              </label>
              <br />
              <input
                placeholder=" enter your No."
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Specialization
              </label>
              <br />
              <input placeholder="" type="text" className="doctorId-in" />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Praticing Since
              </label>
              <br />
              <input
                placeholder=" enter time period"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Management
              </label>
              <br />
              <input placeholder=" enter" type="text" className="doctorId-in" />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                City
              </label>
              <br />
              <input
                placeholder=" enter your City"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Dristrict
              </label>
              <br />
              <input
                placeholder=" enter your District"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                State
              </label>
              <br />
              <input
                placeholder=" enter State"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Pincode
              </label>
              <br />
              <input
                placeholder=" enter Pincode"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Hospital
              </label>
              <br />
              <input
                placeholder=" enter here"
                type="text"
                className="doctorId-in"
              />
            </div>
          </div>
          <button className="doc-btn">Submit</button>
        </form>
      </div>
    </>
  );
}
export default DoctorSignIn;
