import React from 'react'
import  "./MedicineNew.css"
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'
import Review from '../Review/Review'
import PLogo from '../ProfileLogo/PLogo'
const MedicineNew = () => {
  return (
    <div>
      <header>
        {/* <div class="logo"></div> */}
        <div className="medLogo"><Link to="/"><Logo/></Link>
        </div>
        <input type="search" class="med-search" placeholder=" Search for medicines and more"/>
        <button class="cart"> <i class="fa-solid fa-cart-plus"></i> View Cart</button>
        {/* <div class="profile-photo"></div> */}
       <div className="medProfile"> <Link to="/Profile"><PLogo/></Link></div>
    </header>
    <div className="medi">
    <div class="main-head">Browse Medicines and Health Products</div>
    <div class="med-health">
        <div class="health-head">Health Conditions</div>
        <div class="med-img-div">
            <div class="med-img1 med-img"></div>
            <div class="med-img2 med-img"></div>
            <div class="med-img3 med-img"></div>
            <div class="med-img4 med-img"></div>
        </div>
    </div>
    <div class="med-health">
        <div class="health-head">Categories</div>
        <div class="med-img-div">
            <div class="med-img1 med-img"></div>
            <div class="med-img2 med-img" ></div>
            <div class="med-img3 med-img"></div>
            <div class="med-img4 med-img"></div>
        </div>
    </div>
    </div>
   <div className="medReview"> <Review/></div>
    {/* <div className="review">
          <p>Reviews</p>
      </div> */}
      {/* <div className="footer"></div> */}
<Footer/>
    </div>
  )
}

export default MedicineNew
