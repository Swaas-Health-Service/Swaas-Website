import React from 'react'
import './Medicines.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Medicines() {
  const THRESHOLD = 20;
  class SwipeSlider {
    constructor(slider) {
      this.startX = 0;
      this.oldX = 0;
      this.startPosition = 0;
      this.snapPosition = 0;
      this.isDown = false;
      this.userHasSwiped = false;

      // Init
      this.cacheElements(slider);
      this.setDimensions();
      this.setIndicator();
      this.bindHandlers();
    }

    cacheElements(slider) {
      this.slider = slider;
      this.items = this.slider.querySelectorAll('.js-slider-item');
      this.indicator = slider.parentNode.querySelector('.js-slider-indicator');
      this.indicatorBar = slider.parentNode.querySelector('.js-slider-indicator-bar');
      this.arrows = slider.parentNode.querySelectorAll('.js-slider-arrow');
    }

    setDimensions() {
      const spacing = 20;
      const sliderWidth = this.slider.offsetWidth;
      const itemWidth = this.items[0].offsetWidth;
      const itemsWidth = this.items.length * itemWidth;

      this.itemWidth = itemWidth;
      this.maxAllowedW = sliderWidth < itemsWidth ? sliderWidth - itemsWidth - spacing : 0;
    }

    setIndicator() {
      if (!this.indicator) return;

      const times = (this.items.length * this.itemWidth) / this.slider.offsetWidth;
      const length = this.indicatorBar.offsetWidth / times;

      this.indicator.style.width = `${length}px`;
    }

    // Calculate

    calculateBoundaries(position, bounce = true) {
      const bounceMargin = bounce ? this.itemWidth / 4 : 0;

      if (position > bounceMargin) return bounceMargin;
      if (position < this.maxAllowedW - bounceMargin) return this.maxAllowedW - bounceMargin;

      return position;
    }

    calculateNextSnap(position, swipeNext) {
      let snapPosition = (parseInt((position / this.itemWidth), 10) - swipeNext) * this.itemWidth;

      if (snapPosition < this.maxAllowedW) snapPosition = this.maxAllowedW;
      return snapPosition;
    }

    moveIndicator(currPos) {
      if (!this.indicator) return;

      const indicatorPos = this.indicatorBar.offsetWidth - this.indicator.offsetWidth;
      const position = this.mapToRange(currPos, 0, this.maxAllowedW, 0, indicatorPos);

      this.indicator.style.left = `${position}px`;
    }

    moveSlider(position, snapPosition = null) {
      // When dragging we need 2 positions: current and snap on end
      this.snapPosition = snapPosition != null ? snapPosition : position;

      this.slider.setAttribute('style', `transform: translate3d(${position}px, 0, 0)`);
    }

    // Helpers

    mapToRange(num, inMin, inMax, outMin, outMax) {
      return ((num - inMin) * (outMax - outMin)) / ((inMax - inMin) + outMin);
    }

    toggleArrowDisable() {
      this.arrows.forEach((el) => el.classList.remove('disabled'));

      if (this.snapPosition === 0) this.arrows[0].classList.add('disabled');
      else if (this.snapPosition === this.maxAllowedW) this.arrows[1].classList.add('disabled');
    }

    // Handlers

    bindHandlers() {
      // TODO: maybe add mousedwon and touchstart listeners here. Then add inside them
      // only the relevant move / end listeners (touch or mouse), and remove them on end
      this.slider.addEventListener('touchstart', (e) => this.handleTouchStart(e));
      this.slider.addEventListener('touchmove', (e) => this.handleTouchMove(e));
      this.slider.addEventListener('touchend', (e) => this.handleEnd(e));

      this.slider.addEventListener('mousedown', (e) => this.handleMouseStart(e));
      this.slider.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.slider.addEventListener('mouseup', (e) => this.handleEnd(e));
      this.slider.addEventListener('mouseleave', (e) => this.handleEnd(e));

      this.slider.addEventListener('wheel', (e) => this.handleWheel(e));

      this.slider.addEventListener('click', (e) => this.handleClick(e));
      window.addEventListener('resize', () => this.handleResize());

      if (!this.arrows.length) return;

      this.arrows[0].addEventListener('click', (e) => this.handleArrowClick(e)); // left
      this.arrows[1].addEventListener('click', (e) => this.handleArrowClick(e)); // right
    }

    // Start

    handleTouchStart(e) {
      if (e.touches.length > 1) return;

      this.handleStart(e);
    }

    handleMouseStart(e) {
      e.preventDefault();

      this.handleStart(e);
    }

    handleStart(e) {
      this.isDown = true;
      this.userHasSwiped = false;
      this.startPosition = this.snapPosition;
      this.startX = (e.pageX || e.touches[0].pageX) - this.slider.offsetLeft;

      this.slider.classList.add('active');
    }

    // Move

    handleTouchMove(e) {
      if (e.touches.length > 1 || !this.isDown) return;

      this.handleMove(e);
    }

    handleMouseMove(e) {
      if (!this.isDown) return;

      e.preventDefault();
      this.handleMove(e);
    }

    handleMove(e) {
      const pageX = e.pageX || e.touches[0].pageX;
      const currX = pageX - this.slider.offsetLeft;
      const dist = currX - this.startX;

      if (Math.abs(dist) < THRESHOLD) return;

      const swipeNext = this.oldX - currX < 0 ? 0 : 1; // Swipe direction
      const accelerate = this.mapToRange(Math.abs(dist), THRESHOLD, window.innerWidth, 1, 3);
      const position = this.calculateBoundaries(this.startPosition + (dist * accelerate));

      e.preventDefault();

      this.userHasSwiped = true;
      this.oldX = currX;

      this.moveSlider(position, this.calculateNextSnap(position, swipeNext));
      this.moveIndicator(position);
    }

    // End

    handleEnd() {
      if (!this.isDown) return;

      this.isDown = false;
      this.slider.classList.remove('active');

      this.moveSlider(this.snapPosition);
      this.moveIndicator(this.snapPosition);

      if (this.arrows.length > 0) this.toggleArrowDisable();
    }

    // Other Handlers

    handleWheel(e) {
      if (Math.abs(e.deltaX) < THRESHOLD) return;

      const step = 40;
      const snapPosition = this.snapPosition + (step * Math.sign(e.deltaX));

      this.slider.classList.add('active'); // Will be removed on mouseleave
      this.moveSlider(this.calculateBoundaries(snapPosition, false));
      this.moveIndicator(snapPosition);
      this.toggleArrowDisable();
    }

    handleArrowClick(e) {
      const direction = e.target.classList.contains('left') ? 1 : -1;
      const position = this.calculateBoundaries(
        this.snapPosition + (direction * this.itemWidth), false
      );

      this.slider.classList.remove('active');
      this.moveSlider(position);
      this.moveIndicator(position);
      this.toggleArrowDisable();
    }

    handleResize() {
      this.setIndicator();
      this.setDimensions();

      if (this.maxAllowedW > this.snapPosition) {
        this.moveSlider(this.maxAllowedW);
        this.moveIndicator(this.maxAllowedW);
      }
    }

    handleClick(e) {
      if (!this.userHasSwiped) return;

      e.preventDefault(); // Disallow click while swiping
      this.userHasSwiped = false;
    }
  }


  const sliders = document.querySelectorAll('.slider');
  sliders.forEach((slider) => { new SwipeSlider(slider) });
  return (
    
    <div>
      <nav className="navbar navbar-light justify-content-between" style={{backgroundColor:"#CAF4F4"}}>
        <a href="/" className="navbar-brand">Swaas</a>
        <button className="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg><i className="bi bi-cart"></i>   Your Cart
        </button>       <form className="form-inline">
        <div className='searchbar'>            
            <input className="form-control mr-sm-2" type="search" style={{paddingLeft:"30px",width:"20vw"}} placeholder="Search for medicines and more" aria-label="Search"/>
           <i className="fa-solid fa-magnifying-glass fa-lg" style={{position:"absolute",top:"50%",left:"-27px",transform:"translateY(-50%)"}}></i>
        </div>
        </form>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg> <i className="bi bi-person"></i>
      </nav> 

      <h2 style={{textAlign:"center"}}>Browse Medicines and Health products</h2>
       {/* <Carousel>
                <div>
                    <img src="./images/elsa-olofsson-Pm0K9Y3EPUc-unsplash.jpg" alt='' style={{height:"10vh",width:"10vw"}}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt=''/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt=''/>
                    <p className="legend">Legend 3</p>
                </div>
        </Carousel> */}
        <main>
	<section className="slider-section">
		<h1 className="title">Health Products</h1>
		<div className="slider-container">
			<ol className="cards slider">					
				<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 1</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href='/'>
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 2</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 3</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 4</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
				<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 5</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href='/'>
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 6</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 7</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 8</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 9</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 10</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 11</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 12</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 13</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 14</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 15</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 16</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
			</ol>
			<div className="slider-indicator-bar js-slider-indicator-bar">
				<div className="slider-indicator js-slider-indicator"></div>
			</div>
			<span className="js-slider-arrow slider-arrow left disabled"></span>
    	<span className="js-slider-arrow slider-arrow right"></span>
		</div>
	</section>
	
	<section className="slider-section">
		<h1 className="title">Categories</h1>
		<div className="slider-container">
			<ol className="cards slider">					
				<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 1</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 2</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 3</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 4</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
				<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 5</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 6</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 7</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
					<li className="card-outter slider-item js-slider-item">
						<div className="card">
							<a href="/">
								<img src="https://unsplash.it/210/100" alt=''/>
								<h2 className="title">Item 8</h2>
								<p className="description">Item description</p>
							</a>	
						</div>
					</li>
			</ol>
			<div className="slider-indicator-bar js-slider-indicator-bar">
				<div className="slider-indicator js-slider-indicator"></div>
			</div>
			<span className="js-slider-arrow slider-arrow left disabled"></span>
			<span className="js-slider-arrow slider-arrow right"></span>
		</div>
	</section>
</main>
      </div>
  

     
  ) 
}
