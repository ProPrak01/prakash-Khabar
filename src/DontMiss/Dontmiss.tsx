import "./Dontmiss.css";
const Dontmiss = ({allNews, setCategory}: {allNews: any[], setCategory: (category: string) => void}) => {
  console.log(allNews);
  const Article1 = allNews[4];
  const Article2 = allNews[5];
  const Article3 = allNews[6];
  const Article4 = allNews[7];
  const Article5 = allNews[8];
  const Article6 = allNews[9];

  
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
          <div className="dms-More btn darkbluebg">
            <div className="more-text">More</div>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </div>
      </div>
      <div className="dms-content">
        <div className="dms-left">
          <img
            src={Article1.urlToImage}
            alt="dmsl"
          />
          <div className="dmsl-head">
            Craig Bator <span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
            Now Is the Time to Think About Your Small Business Success
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
              Craig Bator <span className="lightText">- 27 Dec 2020</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              Penn's Expanding Political Climate Gears Up Fo
2020 Election
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
              Craig Bator <span className="lightText">- 27 Dec 2020</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              Penn's Expanding Political Climate Gears Up Fo
2020 Election
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
              Craig Bator <span className="lightText">- 27 Dec 2020</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              Penn's Expanding Political Climate Gears Up Fo
2020 Election
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
              Craig Bator <span className="lightText">- 27 Dec 2020</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              Penn's Expanding Political Climate Gears Up Fo
2020 Election
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
              Craig Bator <span className="lightText">- 27 Dec 2020</span>
              </div>
              <div className="dms-card-heading fontsize2vh">
              Penn's Expanding Political Climate Gears Up Fo
2020 Election
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
