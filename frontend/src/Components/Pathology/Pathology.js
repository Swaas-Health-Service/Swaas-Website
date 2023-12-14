import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'

const Pathology = () => {
  return (
    <div>
       <header>
        {/* <div class="logo"></div> */}
        <Link to="/"><Logo/></Link>

        <input type="search" class="med-search" placeholder=" Search for medicines and more"/>
        <button class="cart"> <i class="fa-solid fa-cart-plus"></i> View Cart</button>
        <div class="profile-photo"></div>
    </header>
    </div>
  )
}

export default Pathology
