import SignUp from "./Components/SignUp/Signup"
import BillsandInsuarance from "./Components/BillsandInsuarance/BillsandInsuarance"
import Emergency from "./Components/Emergency/Emergency"
import HomePage from "./Components/HomePage/HomePage"
import LoginPage from "./Components/LoginPage/Login"
import MentalHealth from "./Components/MentalHealth/MentalHealth"
import OPD from "./Components/OPD/OPD"
import Pathology from "./Components/Pathology/Pathology"
import Profile from "./Components/Profile/Profile"
import Teleconsultation from "./Components/Teleconsultation/Teleconsultation"
import Doctors from "./Components/Doctors/Doctors"
import About from "./Components/AboutUS/About"
import MedicineNew from "./Components/Medicine-New/MedicineNew"


import {
  BrowserRouter as Main,
  Routes,
  Route
  
} from "react-router-dom";
import PatientDetails from "./Components/Hospital/PatientList/PatientDetails"
import Register from "./Components/Hospital/PatientList/Signuplogin/SignupLogin"
import LoginPatient from "./Components/Hospital/PatientList/Signuplogin/LoginPatient"

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
          <Route exact path='/LoginPage' element={<LoginPage/>}/>       
          <Route exact path='/Medicine' element={<MedicineNew/>}/>       
          <Route exact path='/MentalHealth' element={<MentalHealth/>}/>       
          <Route exact path='/OPD' element={<OPD/>}/>       
          <Route exact path='/Pathology' element={<Pathology/>}/>       
          <Route exact path='/Profile' element={<Profile/>}/>       
          <Route exact path='/SignUp' element={<SignUp/>}/>       
          <Route exact path='/Teleconsultation' element={<Teleconsultation/>}/> 
          <Route exact path='/Doctors' element={<Doctors/>}/> 
          <Route exact path='/Patient' element={<PatientDetails/>}/>
          <Route exact path='/Register' element={<Register/>}/>
          <Route exact path='/Loginpatient' element={<LoginPatient/>}/>
          <Route exact path='/Logindoctor' element={<LoginPatient/>}/>
          <Route exact path='/Loginhospital' element={<LoginPatient/>}/>
        </Routes>
      </Main>
    </div>
      
    </>
  )
}

export default App
