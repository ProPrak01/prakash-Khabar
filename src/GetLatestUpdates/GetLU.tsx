import React from 'react'
import './GetLU.css'
import twitterx from '../assets/twitterx.png'
import youtube from '../assets/youtubex.png'
import insta from '../assets/instax.png'
import fb from '../assets/facebookx.png'
import Ad from '../Ad/Ad'

const GetLU = () => {
  return (
    <div className='Recent-container'>
    <div className="dms-navbar  mb2vh opacity0">
     <div className="dms-heading red fontsize1o6vh">Stay Connected</div>
   </div>
    <div className="getLU-container">
      <div className="getLU-heading">

        Get Latest Updates
        </div>
      <div className="getLU-buttons">
      <div className="getLU-email glubtn">Your email Address</div>
      <div className="getLU-Subscribe glubtn">Subscribe</div>
      </div>
      
    </div>  

       

 </div>
  )
}

export default GetLU