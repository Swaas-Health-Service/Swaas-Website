import React from "react";
import "./Doctor.css";
const Teleconsultation= () => {
  return (
    <div className="teleconsultationstab">
      <div className="teleconsultation-list">
        <div className="teleconsultationbtn">
          <div className="teleconsultationbtn1">Chat</div>
        </div>
        <div className="patientdata">
          <div className="patientphotocontainer">
            <div className="patientphoto"></div>
          </div>
          <div className="patientname">
            <div className="Name">Shantanu Singh</div>
            <div className="lastmessage">
              
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
        <div className="patientdata">
          <div className="patientphotocontainer">
            <div className="patientphoto"></div>
          </div>
          <div className="patientname">
            <div className="Name">Rupam Mahato</div>
            <div className="lastmessage">
              
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
        <div className="patientdata">
          <div className="patientphotocontainer">
            <div className="patientphoto"></div>
          </div>
          <div className="patientname">
            <div className="Name">Aditya Yadav</div>
            <div className="lastmessage">
              
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
      </div>
      <div className="teleconsultationchats">
        <div className="chatboxtitle">
          <div className="patientphoto inchat"></div>
          <div className="namecontainer inchat">Shantanu Singh</div>
        </div>
        <div className="message">
        Message 1
        </div>
        <div className="message">
        Message 2
        </div>
        <div className="message doctorside">
        Ok good
        </div>
        <input type="text" className="textinputforchat" placeholder="TEXT HERE"/>
      </div>
    </div>
  );
};

export default Teleconsultation
