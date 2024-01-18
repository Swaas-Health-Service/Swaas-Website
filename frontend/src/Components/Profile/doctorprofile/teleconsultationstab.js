import React from "react";
import "./doctor.css";
export default () => {
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
            <div className="Name">Hakuna matata</div>
            <div className="lastmessage">
              lorem ipsum dolor sit amet consectetu ipsum dolor sit
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
        <div className="patientdata">
          <div className="patientphotocontainer">
            <div className="patientphoto"></div>
          </div>
          <div className="patientname">
            <div className="Name">Hakuna matata2</div>
            <div className="lastmessage">
              lorem ipsum dolor sit amet consectetu ipsum dolor sit
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
        <div className="patientdata">
          <div className="patientphotocontainer">
            <div className="patientphoto"></div>
          </div>
          <div className="patientname">
            <div className="Name">Hakuna matata3</div>
            <div className="lastmessage">
              lorem ipsum dolor sit amet consectetu ipsum dolor sit
            </div>
          </div>
          <div className="lastmessagetime">12:00 PM</div>
        </div>
      </div>
      <div className="teleconsultationchats">
        <div className="chatboxtitle">
          <div className="patientphoto inchat"></div>
          <div className="namecontainer inchat">Hakuna matata lallel</div>
        </div>
        <div className="message">
        kjbkabsvkd  p98wfwehfohqfq  hwfliwekjhf hfiuhwaelif hifuh iuwefhkewkfglw iuhfliewgf flkwbfl ihfwekf hfiuwehefl ifuhleiu
        </div>
        <div className="message">
        hii dbasjhdfb
        </div>
        <div className="message doctorside">
        ok good
        </div>
        <input type="text" className="textinputforchat" placeholder="TEXT HERE"/>
      </div>
    </div>
  );
};
