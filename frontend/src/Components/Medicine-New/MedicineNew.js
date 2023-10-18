import React from 'react'
import  "./MedicineNew.css"
const MedicineNew = () => {
  return (
    <div>
      <header>
        <div class="logo"></div>
        <input type="search" class="med-search" placeholder=" Search for medicines and more"/>
        <button class="cart"> <i class="fa-solid fa-cart-plus"></i> View Cart</button>
        <div class="profile-photo"></div>
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
    <div className="review">
          <p>Reviews</p>
      </div>
      <div className="footer"></div>
    </div>
  )
}

export default MedicineNew
