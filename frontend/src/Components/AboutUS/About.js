import React from 'react'
import "./About.css";
import {Link} from "react-router-dom"
import Logo from '../Logo/Logo'
import Footer  from '../Footer/Footer';
import Review from "../Review/Review"
import PLogo from '../ProfileLogo/PLogo';
const About = () => {
  return (
    <div>
      <nav>
        {/* <div className="swaaslogo">
        </div> */}
                <Link to="/"><Logo/></Link>

        <div><a style={{color:" #0D6869"}} href="/">Features</a></div>
        <div><a style={{color:" #0D6869"}} href="/">Industries</a></div>
        <div><a style={{color:" #0D6869"}}href="/">Contact us</a></div>
        <div><a style={{color:" #0D6869"}}href="/">Reviews</a></div>
        <div><a style={{color:" #0D6869"}}href="/">Complain</a></div>
        <div><a style={{color:" #0D6869"}}href="/">Join us</a></div>
        {/* <div className='profile-photo' >
            
        </div> */}
        <Link to="/Profile" ><PLogo/></Link>
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
            <img src="" alt=""/>
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
    {/* <div className="review">
          <p>Reviews</p>
      </div> */}
      <Review/>
<Footer/>

    </div>
  )
}

export default About
