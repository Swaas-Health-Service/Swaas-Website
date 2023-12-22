import React from "react";
import "./PatientSign.css";
import { Link } from "react-router-dom";

function PatientSignIn() {
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
                HealthId
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
                First Name
              </label>
              <br />
              <input
                placeholder=" enter your First Name"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Middle Name
              </label>
              <br />
              <input
                placeholder=" enter your Middle Name"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Last Name
              </label>
              <br />
              <input
                placeholder=" enter your Last Name"
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
                placeholder=" enter your email"
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
                Password
              </label>
              <br />
              <input
                placeholder=" enter your password"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Confirm Password
              </label>
              <br />
              <input
                placeholder=" enter your password"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Day Of Birth
              </label>
              <br />
              <input
                placeholder=" enter your day of birth"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Month Of Birth
              </label>
              <br />
              <input
                placeholder=" enter your Month of birth"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Year Of Birth
              </label>
              <br />
              <input
                placeholder=" enter your Year of birth"
                type="text"
                className="doctorId-in"
              />
            </div>
            <div className="doctor">
              <label for="doctorId" className="doctorId">
                Gender
              </label>
              <br />
              <input
                placeholder=" enter your gender"
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
                Profile Photo
              </label>
              <br />
              <input
                placeholder=" enter here"
                type="file"
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
export default PatientSignIn;
