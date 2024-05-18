import React from "react";
import "./Header.css";

import mainLogo from "../assets/pkhabar-logo.png"

const Header = () => {
  return (
    <div className="Header-container">
      <div className="brandings">
        <div className="branding">
          <img src={mainLogo} alt="" height={100} />
            {/* <div className="Brand-name">
              <div className="black">Pra</div>
              <div className="red">Khabar</div>
            </div> */}
        </div>
        
        <div className="ad">
        This is Advertisement
        {/* <img src={billboard} alt="" height={100} /> */}
        </div>
      </div>

      <div className="nav2">
        <div className="sections">
        <div className="Home">Home</div>
        <div className="International">International</div>
        <div className="Sports">Sports</div>
        <div className="Opinion">Opinion</div>
        <div className="Buissness">Buissness</div>
        <div className="youth">youth</div>
        <div className="Entertainment">Entertainment</div>
        <div className="Lifestyle">Lifestyle</div>
        <div className="Pages">
          <div className="pages-text">
          Pages
          </div>
        <span className="material-symbols-outlined">
arrow_drop_down
</span>
        </div>
    
        </div>
        <div className="search">
          <input type="text"  placeholder="search.."/>
        <span style={{marginRight:"0.4vh"}} className="material-symbols-outlined">search</span>
        </div>
      
        
      </div>
    </div>
  );
};

export default Header;
