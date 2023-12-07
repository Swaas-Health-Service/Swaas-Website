import React from 'react'
import "./About.css";
import founder from './Images/FOUNDER.jpg'
const About = () => {
  return (
    <div>
      <nav>
        <div className="swaaslogo">
        </div>
        <div className='aboutus-navbar'></div>
        <div className='aboutus-navbar-elements'>Features</div>
        <div className='aboutus-navbar-elements'>Industries</div>
        <div className='aboutus-navbar-elements'>Contact us</div>
        <div className='aboutus-navbar-elements'>Reviews</div>
        <div className='aboutus-navbar-elements'>Complain</div>
        <div className='aboutus-navbar-elements'>Join us</div>
        <div className='profile-photo' >
            
        </div>
    </nav>
    <div id="mission">
        <div id="missiontext">
            <h1>Mission and Motto</h1> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus commodi repellat veniam numquam? Vero, eaque? Repellat maxime eius aut nemo quidem quae dolor unde quis. Earum distinctio sequi perferendis nam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem atque at molestiae architecto, animi nostrum sit. Maiores hic accusamus saepe, quia repellendus deserunt laboriosam esse fugit! Modi libero fugiat fuga?</p>
        </div>
        <div className='mottopic'>
          
        </div>
    </div>
    <div id="aboutus">
        <div className='aboutpic'>
            
        </div>
        <div id="abouttext">
            <h1>About Us</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, dignissimos maiores similique eveniet quam molestias praesentium eum natus harum quo, obcaecati minus nam dicta magnam corrupti aspernatur. Consequatur, accusantium voluptates!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequuntur adipisci dolore, laborum veritatis dicta quaerat, nemo inventore quibusdam eos dolores aperiam doloribus dignissimos optio ad, odio porro minima exercitationem?</p>
        </div>
    </div>
    <div id="founding">
        <div id="foundingtext">
            <h1>Founing Story</h1> 
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio at cumque ullam veniam illo, natus possimus neque veritatis dicta iure maiores dignissimos nulla nostrum in. Impedit ad incidunt voluptatibus illo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque debitis sit, labore explicabo asperiores ex quibusdam eveniet reiciendis suscipit, quia commodi numquam minus consequuntur quas velit vitae beatae! Placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur nisi quam error odit provident beatae perspiciatis sint, sunt dolor at ipsa repellat sit nulla accusantium deleniti tempore aspernatur! At!</p>
        </div>
        <div className='foundingpic'>
           
        </div>
    </div>
    <h1 id="founders">Our Founders</h1>
    <div id="founderpics">
        <div>
            <img src={founder} alt="" style={{height:"250px",width:"auto"}}/>
            <h2>Founder</h2>
        </div>
        <div>
            <img src="" alt=""/>
            <h2>Co-Founder</h2>
        </div>
        <div>
            <img src="" alt=""/>
            <h2>Co-Founder</h2>
        </div>
        <div>
            <img src="" alt=""/>
            <h2>CTO</h2>
        </div>
    </div>
    <div className="review">
          <p>Reviews</p>
      </div>
    <footer className='footer'></footer>

    </div>
  )
}

export default About
