import { useState } from "react";
import "./Dontmiss.css";
const Dontmiss = ({allNews,setCategory }: {setCategory: any, allNews: any}) => {
  console.log(allNews);
  const Article1 = allNews[4];
  const Article2 = allNews[5];
  const Article3 = allNews[6];
  const Article4 = allNews[7];
  const Article5 = allNews[8];
  const Article6 = allNews[9];
  const [selectedSection, setSelectedSection] = useState("General");
  const handleSectionClick = (section: React.SetStateAction<string>) => {
      
      setSelectedSection(section);
     
      setCategory(selectedSection);
 


  };
  
  return (
    <div className="DontMiss-container">
      <div className="dms-navbar">
        <div className="dms-heading red">Don't Miss</div>
        <div className="dms-buttons">
          <div className="dms-all btn redbg">All</div>
          <div className="dms-Lifestyle btn purplebg">Lifestyle</div>
          <div className="dms-Vogue btn greenbg">Vogue</div>
          <div className="dms-Health&Fitness btn bluebg">Health & Fitness</div>
          <div className="dms-Travel btn goldbg">Travel</div>
          <div className="dms-Gadget btn lightbluebg">Gadget</div>
          <div className="dms-World btn bluebg">World</div>
          
        </div>
      </div>
      <div className="dms-content">
        <div className="dms-left">
          <img
            src={Article1.urlToImage}
            alt="dmsl"
          />
          <div className="dmsl-head">
          {Article1.author}<span className="lightText">     {Article1.publishedAt}</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          {Article1.title}
          </div>
          <div className="dmsl-para lightText">
          {Article1.description}
          </div>
        </div>
        <div className="dms-right">
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article2.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article1.author} <span className="lightText">{" "}{Article2.publishedAt}</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              {Article2.title}
              </div>
            </div>
            </div>
            <div className="dmsr-visit">
              VISIT
            </div>
           
          </div>
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article3.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article3.author}  <span className="lightText">{" "}{Article3.publishedAt}</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              {Article3.title} 
              </div>
            </div>
            </div>
            <div className="dmsr-visit">
              VISIT
            </div>
           
          </div>
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article4.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article4.author} <span className="lightText">{" "}{Article4.publishedAt}</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              {Article4.title} 
              </div>
            </div>
            </div>
            <div className="dmsr-visit">
              VISIT
            </div>
           
          </div>
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article5.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article5.author} <span className="lightText">{" "}{Article5.publishedAt}</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              {Article5.title} 
              </div>
            </div>
            </div>
            <div className="dmsr-visit">
              VISIT
            </div>
           
          </div>
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article6.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article6.author}<span className="lightText">{" "}{Article6.publishedAt}</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              {Article6.title}
              </div>
            </div>
            </div>
            <div className="dmsr-visit">
              VISIT
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dontmiss;
