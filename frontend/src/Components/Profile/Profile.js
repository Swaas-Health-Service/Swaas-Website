import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import "./Profile.css";
import PLogo from '../ProfileLogo/PLogo';
import Upload from '../UploadImage/Upload';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: ""
  });
  const handleInputChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [myGender, setMyGender] = useState("");
  const handleGenderChange = (event) => {
    setMyGender(event.target.value);
  }
  const [textarea, setTextarea] = useState(
    "Your medical issues goes here"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  }
  const handleEditClick = () => {
    setEditing(true);
  };
  const handleSaveClick = () => {
    // Perform an action to save the updated data, e.g., send to a server or update state
    console.log('Saving data:', formData);

    // Reset the edit mode
    setEditing(false);
  };
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };


  return (
    <div >
      <header className='header'>
        {/* <Link to="/"> <div className="logo"></div></Link> */}
        <Link to="/"><Logo /></Link>
        {/* <div className="profile-photo"></div> */}
        <Link to="/Profile"><PLogo/></Link>
      </header>
      <div className="sidebar">
        {/* <div className="photo">
          <div className="photo-img"></div>
          <div className="photo-info">Name</div>
        </div> */}
        {/* <div className="profile-pic">
          <label className="-label" htmlFor="file">
            <span className="glyphicon glyphicon-camera"></span>
            <span>Change Image</span>
          </label>
          <input id="file" type="file" onchange={(event) => loadFile(event)} />
          <img src="./Assests/Images/profile-photo.png" id="output" width="200" alt='' />
        </div> */}
        <Upload/>
      </div>
      <div className="line"></div>

      <div className="main">

        {isEditing ? (
          <>
            <div className="heading">My Profile</div>
            <div className="info">
              <div className="name">
                <div className="name-info">Name</div>
                <input type="text" placeholder="First Name" value={formData.firstname} name="firstname" onChange={handleInputChange} id="ab" />
                <input type="text" placeholder="Middle Name" value={formData.middlename} name="middlename" onChange={handleInputChange} id="ab" />
                <input type="text" placeholder="Last Name" value={formData.lastname} name="lastname" onChange={handleInputChange} id="ab" />
              </div>
              <div className="dob">
                <div className="dob-info">Date Of Birth</div>
                <input type="date" placeholder="DD Month Year" id="ac" style={{ width: "12rem" }} />
              </div>
              <div className="age">
                <div className="age-info">Age</div>
                <input type="number" placeholder="00" id="ac" style={{ width: "3rem" }} />
              </div>
              <div className="gender">
                <div className="gender-info">Gender</div>
                <select value={myGender} id="ac" onChange={handleGenderChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="contact no.">
                <div className="contact-info">Contact No.</div>
                <input type="text" placeholder="" id="ac" style={{ width: "13rem" }} />
              </div>
              <div className="emergency no.">
                <div className="contact-info">Emergency Contact No.</div>
                <input type="text" placeholder="" id="ac" style={{ width: "15.5rem" }} />
              </div>
              <div className="email" >
                <div className="name-info">E-mail ID</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
              </div>
              <div className="uhi">
                <div className="name-info">UHI ID</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
              </div>
              <div className="disease">
                <div className="name-info">DIsease Contracted</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem", height: "3.5rem" }} />
              </div>
              <div className="problem">
                <div className="name-info">Major Problem (Health Related)</div>
                <input type="text" placeholder="" value={textarea} onChange={handleChange} id="ab" style={{ width: "29rem", height: "3.5rem" }} />
              </div>
              <div className="insurence">
                <div className="name-info">Insurance Adopted</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
              </div>
              <div className="backup">
                <div className="name-info">Insurence Cover Breakup </div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
              </div>
              <div className="disease">
                <div className="name-info">Address</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem", height: "3.5rem" }} />
              </div>
              <div div className="Addresscodes">
                <span style={{ marginRight: "5rem" }}>

                  <div className="name-info">District Code</div>
                  <input type="text" id="ac" />
                </span>
                <span>

                  <div className="name-info">PIN Code</div>
                  <input type="text" id="ac" />
                </span>
                </div>

                <div className="Addresscodes">
                  <span style={{ marginRight: "5rem" }}>

                    <div className="name-info">State Code</div>
                    <input type="text" id="ac" />
                  </span>
                  <span>

                    <div className="name-info">Sub District Code</div>
                    <input type="text" id="ac" />
                  </span>
                </div>
                <div className="Addresscodes">
                  <span style={{ marginRight: "5rem" }}>

                    <div className="name-info">Town Code</div>
                    <input type="text" id="ac" />
                  </span>
                  <span>

                    <div className="name-info">Village Code</div>
                    <input type="text" id="ac" />
                  </span>


                </div>
                <span style={{ marginRight: "5rem" }}>

                  <div className="name-info">Ward Code</div>
                  <input type="text" id="ac" />
                </span>




              
            </div>
            <button className="Save" onClick={handleSaveClick}>Save</button>
          </>)
          :

          (
            <><div className="heading">My Profile</div>
              <div className="info">
                <div className="name">
                  <div className="name-info">Name</div>
                  <input type="text" placeholder="First Name" value={formData.firstname} name="firstname" id="ab" />
                  <input type="text" placeholder="Middle Name" value={formData.middlename} name="middlename" id="ab" />
                  <input type="text" placeholder="Last Name" value={formData.lastname} name="lastname" id="ab" />
                </div>
                <div className="dob">
                  <div className="dob-info">Date Of Birth</div>
                  <input type="date" placeholder="DD Month Year" id="ac" style={{ width: "12rem" }} />
                </div>
                <div className="age">
                  <div className="age-info">Age</div>
                  <input type="number" placeholder="00" id="ac" style={{ width: "3rem" }} />
                </div>
                <div className="gender">
                  <div className="gender-info">Gender</div>
                  <input type="text" placeholder="XYZ" value={myGender} id="ac" style={{ width: "8rem" }} />
                </div>
                <div className="contact no.">
                  <div className="contact-info">Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{ width: "13rem" }} />
                </div>
                <div className="emergency no.">
                  <div className="contact-info">Emergency Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{ width: "15.5rem" }} />
                </div>
                <div className="email">
                  <div className="name-info">E-mail ID</div>
                  <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
                </div>
                <div className="uhi">
                  <div className="name-info">UHI ID</div>
                  <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
                </div>
                <div className="disease">
                  <div className="name-info">DIsease Contracted</div>
                  <input type="text" placeholder="" id="ab" style={{ width: "29rem", height: "3.5rem" }} />
                </div>
                <div className="problem">
                  <div className="name-info">Major Problem (Health Related)</div>
                  <input type="text" placeholder="" value={textarea} id="ab" style={{ width: "29rem", height: "3.5rem" }} />
                </div>
                <div className="insurence">
                  <div className="name-info">Insurance Adopted</div>
                  <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
                </div>
                <div className="backup">
                  <div className="name-info">Insurence Cover Breakup </div>
                  <input type="text" placeholder="" id="ab" style={{ width: "29rem" }} />
                </div>
                <div className="disease">
                <div className="name-info">Address</div>
                <input type="text" placeholder="" id="ab" style={{ width: "29rem", height: "3.5rem" }} />
              </div>
              <div div className="Addresscodes">
                <span style={{ marginRight: "5rem" }}>

                  <div className="name-info">District Code</div>
                  <input type="text" id="ac" />
                </span>
                <span>

                  <div className="name-info">PIN Code</div>
                  <input type="text" id="ac" />
                </span>
                </div>

                <div className="Addresscodes">
                  <span style={{ marginRight: "5rem" }}>

                    <div className="name-info">State Code</div>
                    <input type="text" id="ac" />
                  </span>
                  <span>

                    <div className="name-info">Sub District Code</div>
                    <input type="text" id="ac" />
                  </span>
                </div>
                <div className="Addresscodes">
                  <span style={{ marginRight: "5rem" }}>

                    <div className="name-info">Town Code</div>
                    <input type="text" id="ac" />
                  </span>
                  <span>

                    <div className="name-info">Village Code</div>
                    <input type="text" id="ac" />
                  </span>


                </div>
                <span style={{ marginRight: "5rem" }}>

                  <div className="name-info">Ward Code</div>
                  <input type="text" id="ac" />
                </span>





              </div>
              <button className="Edit" onClick={handleEditClick}>Edit</button></>)
        }

      </div>
      <div className="footer"></div>
    </div>

  )
}

export default Profile
