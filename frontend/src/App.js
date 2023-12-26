import {
  BrowserRouter as Main,
  Routes,
  Route
} from "react-router-dom";
import BillsandInsuarance from "./Components/BillsandInsuarance/BillsandInsuarance"
import Emergency from "./Components/Emergency/Emergency"
import HomePage from "./Components/HomePage/HomePage"
import MentalHealth from "./Components/MentalHealth/MentalHealth"
import OPD from "./Components/OPD/OPD"
import Pathology from "./Components/Pathology/Pathology"
import Profile from "./Components/Profile/Profile"
import Teleconsultation from "./Components/Teleconsultation/Teleconsultation"
import Doctors from "./Components/Doctors/Doctors"
import About from "./Components/AboutUS/About"
import MedicineNew from "./Components/Medicine-New/MedicineNew"
import PatientList from "./Components/PatientList/PatientList"
import PatientRegister from "./Components/Registration/Patient/Register"
import DoctorRegister from "./Components/Registration/Doctor/Register"
import PatientReports from "./Components/Profile/PatientReports/PatientReports"
import Registration from "./Components/Registration/Registration"
import PatientLogin from "./Components/Registration/Patient/Login"

const App = () => {
  return (
    <>
    <div>
      <Main>
        <Routes>
          <Route exact path='/MedicineNew'element={<MedicineNew/>}/> 
          <Route exact path='/About'element={<About/>}/> 
          <Route exact path='/BillsandInsuarance'element={<BillsandInsuarance/>}/>       
          <Route exact path='/Emergency' element={<Emergency/>}/>       
          <Route exact path='/' element={<HomePage/>}/>            
          <Route exact path='/Medicine' element={<MedicineNew/>}/>       
          <Route exact path='/MentalHealth' element={<MentalHealth/>}/>       
          <Route exact path='/OPD' element={<OPD/>}/>       
          <Route exact path='/Pathology' element={<Pathology/>}/>       
          <Route exact path='/Profile' element={<Profile/>}/>       
          <Route exact path='/Registration' element={<Registration/>}/>       
          <Route exact path='/Teleconsultation' element={<Teleconsultation/>}/> 
          <Route exact path='/Doctors' element={<Doctors/>}/> 
          <Route exact path='/PatientReport' element={<PatientReports/>}/>
          <Route exact path='/PatientList' element={<PatientList/>}/>
          <Route exact path='/PatientRegister' element={<PatientRegister/>}/>
          <Route exact path='/PatientSignin' element={<PatientLogin/>}/>
          <Route exact path='/DoctorRegister' element={<DoctorRegister/>}/>
          <Route exact path='/PatienReports' element={<PatientReports/>}/>
        </Routes>
      </Main>
    </div>
      
    </>
  )
}

export default App
