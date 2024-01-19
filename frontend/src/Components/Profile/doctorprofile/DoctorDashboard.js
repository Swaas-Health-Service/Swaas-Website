import './Doctor.css'
import DoctorProfile from './DoctorProfile'
import SearchBar from './SearchBar'
import Teleconsultation from './Teleconsultation'

const DoctorDashboard= () => {
    return (
        <div className="doctor">
          <DoctorProfile />
          <SearchBar />
          <Teleconsultation/>
        </div>
    );
 }

 export default DoctorDashboard;