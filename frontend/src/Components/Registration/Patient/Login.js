import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
const PatientLogin = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // const {loggedIn}=props
  const navigate=useNavigate();

  const onButtonClick = () => {
    setEmailError("")
    setPasswordError("")

    // Check if the user has entered both fields correctly
    if ("" === email) {
        setEmailError("Please enter your email")
        return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError("Please enter a valid email")
        return
    }

    if ("" === password) {
        setPasswordError("Please enter a password")
        return
    }

    if (password.length < 7) {
        setPasswordError("The password must be 8 characters or longer")
        return
    }

    props.setLoggedIn(true)

        navigate("/")
    
   }

  return (
    <div>
      <div className="loginbodypat">
        <div className='loginhead'>LOG IN AS PATIENT</div>
          <div className='loginhorizontal'>
            <div className='docsymbol'></div>
            <div className="loginbox">
              <div className='inputContainer'><input type="email" className="enterbox" placeholder="Enter your email/ mobile number" value={email}                 onChange={ev => setEmail(ev.target.value)}
/>            <label className="errorLabel">{emailError}</label>
</div>
              <div className='inputContainer'><input type="password" className="enterbox" placeholder="Enter password"                 onChange={ev => setPassword(ev.target.value)}
/>            <label className="errorLabel">{passwordError}</label>
</div>
              <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
              <button className='forgotpass'>Forgot password?</button>
            </div>
            <div className='docsymbol'></div>
          </div>
      </div>
    </div>
  )
}

export default PatientLogin 