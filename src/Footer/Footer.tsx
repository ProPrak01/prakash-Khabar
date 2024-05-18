import React from 'react'
import './Footer.css'
import mainLogo from "../assets/pkhabar-logo.png"
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube_3670147.png";
const Footer = () => {
  return (
    <div className='Footer-container '>
        <div className="footer-branding footerblock">
        <div className="branding">
          <img src={mainLogo} alt="" height={100} />
        
        </div>
        <div className="footer-text white-centered-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex itaque porro maiores, illum facere eligendi rerum fuga dolorem. Quos voluptates ratione fuga?
        </div>
        <div className="socialmedia">
        <img src={facebook} alt="" height={40} />
        <img src={twitter} alt="" height={40} />
        <img src={youtube} alt="" height={40} />
      </div>
        </div>
        <div className="photoGallary footerblock">
        <div className="dms-navbar">
        <div className="dms-heading font1vh white-centered-font">Photo Gallery</div>
       
      </div>
        <div className="footer-images">
            <div className="footer-image">
            <img src="https://plus.unsplash.com/premium_photo-1664360971698-0c07d3551bed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="footer-image">
            <img src="https://plus.unsplash.com/premium_photo-1681224438760-b843eca36438?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="footer-image">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="footer-image">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZXN0eWxlfGVufDB8fDB8fHww" alt="" />
            </div>

        </div>

        </div>
        <div className="Tags footerblock">
        <div className="dms-navbar">
        <div className="dms-heading font1vh white-centered-font">Tags</div>
       
      </div>
      <div className="dms-buttons dms-btn-extension" >
          <div className="dms-all btn redbg btn-ext">All</div>
          <div className="dms-Lifestyle btn purplebg btn-ext">Travel</div>
          <div className="dms-Vogue btn greenbg btn-ext">Recipies</div>
          <div className="dms-Health&Fitness btn bluebg btn-ext">Health & Fitness</div>
          <div className="dms-Travel btn goldbg btn-ext">Trend</div>
          <div className="dms-Lifestyle btn orangebg btn-ext">Technology</div>
          <div className="dms-Vogue btn darkbluebg btn-ext">Football</div>
          
 
        </div>
        </div>
        <div className="footer-sit footerblock">
        <div className="dms-navbar">
        <div className="dms-heading font1vh white-centered-font">Stay In Touch</div>
       
      </div>
      <div className="getLU-container bgcolornone height100 ">
        <div className="footer-text white-centered-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia nobis minus.</div>
      <div className="getLU-buttons height900 font2vh gap1vh">
      <div className="getLU-email glubtn padding2vh ">Your email Address</div>
      <div className="getLU-Subscribe glubtn padding2vh">Subscribe</div>
      </div>
      
    </div>  
        </div>
    </div>
  )
}

export default Footer