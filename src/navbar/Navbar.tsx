import React from "react";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube_3670147.png";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar-container">
      <div className="navdata">
        <div className="weather">15*</div>
        <div className="place">
          New  York</div>
        <div className="date">  
        <span style={{marginRight:"0.4vh"}} className="material-symbols-outlined">schedule</span>
         <div className="text">          Wednesday, 10 January 2021
</div>
          </div>
        <div className="BreakingNewsTag">Breaking News</div>
        <div className="BreakingNews">
          Indonesia says located black box recorders from crashed plane
        </div>
      </div>
      <div className="socialmedia">
        <img src={facebook} alt="" height={40} />
        <img src={twitter} alt="" height={40} />
        <img src={youtube} alt="" height={40} />
      </div>
    </div>
  );
};

export default Navbar;
