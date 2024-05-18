import React from 'react'
import './Ad.css'
import pkhabarBranding from '../assets/pkhabar-branding.png'
const Ad = () => {
  return (
    <div className='Ad-container'>
      <div className="buyourmerch">MERCH STORE</div>
    <img className='ad-img' src={pkhabarBranding} alt="" />
    </div>
  )
}

export default Ad