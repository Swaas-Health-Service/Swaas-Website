import Navbar from "./Components/Navbar/Navbar"
import SignUp from "./Components/SignUp/Signup"
import BillsandInsuarance from "./Components/BillsandInsuarance/BillsandInsuarance"
import Emergency from "./Components/Emergency/Emergency"
import HomePage from "./Components/HomePage/HomePage"
import LoginPage from "./Components/LoginPage/Login"
import Medicines from "./Components/Medicines/Medicines"
import MentalHealth from "./Components/MentalHealth/MentalHealth"
import OPD from "./Components/OPD/OPD"
import Pathology from "./Components/Pathology/Pathology"
import Profile from "./Components/Profile/Profile"
import Teleconsultation from "./Components/Teleconsultation/Teleconsultation"
import Doctors from "./Components/Doctors/Doctors"


import {
  BrowserRouter as Main,
  Routes,
  Route
  
} from "react-router-dom";

const App = () => {
  return (
    <>
    <div>

      <Main>
        <Routes>
          <Route exact path='/BillsandInsuarance'element={<BillsandInsuarance/>}/>       
          <Route exact path='/Emergency' element={<Emergency/>}/>       
          <Route exact path='/' element={<HomePage/>}/>       
          <Route exact path='/LoginPage' element={<LoginPage/>}/>       
          <Route exact path='/Medicines' element={<Medicines/>}/>       
          <Route exact path='/MentalHealth' element={<MentalHealth/>}/>       
          <Route exact path='/OPD' element={<OPD/>}/>       
          <Route exact path='/Pathology' element={<Pathology/>}/>       
          <Route exact path='/Profile' element={<Profile/>}/>       
          <Route exact path='/SignUp' element={<SignUp/>}/>       
          <Route exact path='/Teleconsultation' element={<Teleconsultation/>}/> 
          <Route exact path='/Doctors' element={<Doctors/>}/> 

        </Routes>
      </Main>
    </div>
      
    </>
  )
}

export default App
