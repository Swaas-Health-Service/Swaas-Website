import React,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import "./Profile.css";

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
   const [formData, setFormData] = useState({
    firstname: "",
    middlename:"",
    lastname:""
  });
  const handleInputChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const handleEditClick = () => {
      setEditing(true);
    };
    const handleSaveClick = () => {
      // Perform an action to save the updated data, e.g., send to a server or update state
      console.log('Saving data:', formData);
  
      // Reset the edit mode
      setEditing(false);
    };
 
  return (
    <div >
      <header className='header'>
        <div className="logo"></div>
        <div className="profile-photo"></div>
      </header>
      <div className="sidebar">
        <div className="photo">
          <div className="photo-img"></div>
          <div className="photo-info">Name</div>
        </div>
      </div>
      <div className="line"></div>
      
      <div className="main">
      
      {isEditing ? (
        <>
        <div className="heading">My Profile</div>
        <div className="info">
          <div className="name">
            <div className="name-info">Name</div>
            <input type="text" placeholder="First Name" value={formData.firstname}name="firstname"onChange={handleInputChange} id="ab"/>
              <input type="text" placeholder="Middle Name"value={formData.middlename}name="middlename"onChange={handleInputChange} id="ab"/>
                <input type="text" placeholder="Last Name"value={formData.lastname}name="lastname" onChange={handleInputChange}id="ab"/>
                </div>
                <div className="dob">
                  <div className="dob-info">Date Of Birth</div>
                  <input type="date" placeholder="DD Month Year" id="ac" style={{width:"12rem"}}/>
                </div>
                <div className="age">
                  <div className="age-info">Age</div>
                  <input type="number" placeholder="00" id="ac" style={{width:"3rem"}}/>
                </div>
                <div className="gender">
                  <div className="gender-info">Gender</div>
                  <input type="text" placeholder="XYZ" id="ac" style={{width:"8rem"}}/>
                </div>
                <div className="contact no.">
                  <div className="contact-info">Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{width:"13rem"}}/>
                </div>
                <div className="emergency no.">
                  <div className="contact-info">Emergency Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{width:"15.5rem"}}/>
                </div>
                <div className="email">
                  <div className="name-info">E-mail ID</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="uhi">
                  <div className="name-info">UHI ID</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="disease">
                  <div className="name-info">DIsease Contracted</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem",height:"3.5rem"}} />
                </div>
                <div className="problem">
                  <div className="name-info">Major Problem (Health Related)</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem",height:"3.5rem"}}/>
                </div>
                <div className="insurence">
                  <div className="name-info">Insurance Adopted</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="backup">
                  <div className="name-info">Insurence Cover Breakup </div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                
              </div>
              <button className="Save"onClick={handleSaveClick}>Save</button>
              </>)
              :
              
              ( 
              <><div className="heading">My Profile</div>
        <div className="info">
          <div className="name">
            <div className="name-info">Name</div>
            <input type="text" placeholder="First Name" value={formData.firstname}name="firstname" id="ab"/>
              <input type="text" placeholder="Middle Name"value={formData.middlename}name="middlename" id="ab"/>
                <input type="text" placeholder="Last Name"value={formData.lastname}name="lastname" id="ab"/>
                </div>
                <div className="dob">
                  <div className="dob-info">Date Of Birth</div>
                  <input type="date" placeholder="DD Month Year" id="ac" style={{width:"12rem"}}/>
                </div>
                <div className="age">
                  <div className="age-info">Age</div>
                  <input type="number" placeholder="00" id="ac" style={{width:"3rem"}}/>
                </div>
                <div className="gender">
                  <div className="gender-info">Gender</div>
                  <input type="text" placeholder="XYZ" id="ac" style={{width:"8rem"}}/>
                </div>
                <div className="contact no.">
                  <div className="contact-info">Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{width:"13rem"}}/>
                </div>
                <div className="emergency no.">
                  <div className="contact-info">Emergency Contact No.</div>
                  <input type="text" placeholder="" id="ac" style={{width:"15.5rem"}}/>
                </div>
                <div className="email">
                  <div className="name-info">E-mail ID</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="uhi">
                  <div className="name-info">UHI ID</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="disease">
                  <div className="name-info">DIsease Contracted</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem",height:"3.5rem"}} />
                </div>
                <div className="problem">
                  <div className="name-info">Major Problem (Health Related)</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem",height:"3.5rem"}}/>
                </div>
                <div className="insurence">
                  <div className="name-info">Insurance Adopted</div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                <div className="backup">
                  <div className="name-info">Insurence Cover Breakup </div>
                  <input type="text" placeholder="" id="ab" style={{width:"29rem"}}/>
                </div>
                
              </div>
              <button className="Edit" onClick={handleEditClick}>Edit</button></>)
               }
              
          </div>
          <div className="footer"></div>
        </div>
      
      )
}

      export default Profile
