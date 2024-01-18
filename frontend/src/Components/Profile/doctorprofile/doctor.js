import React from 'react'
import './doctor.css'
import Doctorprofile from './doctorprofile'
import Searchbar from './searchbar'
import Teleconsultationstab from './teleconsultationstab'

 export default () => {
    return (
        <div className="doctor">
          <Doctorprofile />
          <Searchbar />
          <Teleconsultationstab />
        </div>
    );
 }