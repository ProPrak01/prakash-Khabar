import "./Header.css";
import React, { useState } from 'react';
import mainLogo from "../assets/pkhabar-logo.png"


const Header = ({setCategory, SetCurrentCountry}: {setCategory: any, SetCurrentCountry: any}) => {
  const [selectedSection, setSelectedSection] = useState("General");
  const handleSectionClick = (section: React.SetStateAction<string>) => {
    if(section != "International"){
      setSelectedSection(section);
      SetCurrentCountry("in")

    }
    else{
      SetCurrentCountry("us")
      setSelectedSection(section);

    }


  };
  if(selectedSection != "International"){
    setCategory(selectedSection);
  }
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
        <div onClick={() => handleSectionClick("General")} className={`nav-item ${selectedSection == "General" ? 'active' : ''}`}>Home</div>
        <div onClick={() => handleSectionClick("International")} className={`nav-item ${selectedSection == "International" ? 'active' : ''}`}>International</div>
        <div onClick={() => handleSectionClick("Sports")} className={`nav-item ${selectedSection == "Sports" ? 'active' : ''}`}>Sports</div>
        <div onClick={() => handleSectionClick("science")} className={`nav-item ${selectedSection == "science" ? 'active' : ''}`}>science</div>
        <div onClick={() => handleSectionClick("business")} className={`nav-item ${selectedSection == "business" ? 'active' : ''}`}>business</div>
        <div onClick={() => handleSectionClick("health")} className={`nav-item ${selectedSection == "health" ? 'active' : ''}`}>health</div>
        <div onClick={() => handleSectionClick("entertainment")} className={`nav-item ${selectedSection == "entertainment" ? 'active' : ''}`}>Entertainment</div>
        <div onClick={() => handleSectionClick("technology")} className={`nav-item ${selectedSection == "technology" ? 'active' : ''}`}>technology</div>
        <div onClick={() => handleSectionClick("Pages")} className={`Pages-default nav-item ${selectedSection == "Pages" ? 'active' : ''}`}>
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
