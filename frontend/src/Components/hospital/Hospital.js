import React from "react";
import "./Hospital.css"
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="patient-detail">
        <div className="side-bar"></div>
        <div className="patient-report">
            <div className="pr-heading">Patient Report</div>
            <div className="pr-detail pr">
                <div className="patient_img"></div>
                <div className="pr-detail-name">Sagar Kumar Singh</div>
                <div className="pr-detail-ID">Patient ID:----</div>
                <button className="view-pr">View Patient Report</button>
                <button className="view-pr">Bills</button>
            </div>
            <div className="pr-status pr">
                <h3>Status</h3>
                <p>On Medications</p>
            </div>
            <div className="pr-info pr">
                <h3>Informations</h3>
              <p>Gender:----</p>  
               <p>Blood Type:----</p> 
               <p> Allergies:-----</p>
               <p>Diseases</p>
               <p> Height:-----</p>
                <p>Weight:----</p>
            </div>
        </div>
        <div className="patient-information">
         <div className="pa-info-btns">
            <button className="print-btn pa-btns">Print Patient Report & Prescription</button>
            <button className="btn-Email pa-btns">E-mail Patient</button>
            <button className="btn-assign pa-btns">Doctor Assigned</button>
         </div>
         <div className="pa-info-vital">
            <button className="btn-vital">Vital Sign</button>
         </div>
         <div className="pa-info-rate">
            <div className="dis-rate ">
                <div className="heart_img"></div>
                <div className="heart-rate-info">Heart Rate -----</div>
            </div>
            <div className="dis-rate"> 
            <div className="heart_img"></div>
                <div className="heart-rate-info">Oxygen Saturation -----</div></div>
            <div className="dis-rate">
            <div className="heart_img"></div>
                <div className="heart-rate-info">Body Temperature-----</div>
            </div>
            <div className="dis-rate">
            <div className="heart_img"></div>
                <div className="heart-rate-info">Glucose Level -----</div>
            </div>
         </div>
         <div className="pa-info-test">
            <div className="test-rep">Test Reports</div>
            <div className="scan-test">
                <div className="scan-test-info">CT Scan Test</div>
                <div className="scan-test-info">CT Scan Test</div>
                <div className="scan-test-info">CT Scan Test</div>
                <div className="scan-test-info">CT Scan Test</div>
            </div>
         </div>
         <div className="pa-info-pres">Prescriptions Given Here</div>
        </div>
        </div>
    );
}
export default Sidebar;