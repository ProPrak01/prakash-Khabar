import './Sports.css'
const Sports = ({content}: {content: Array<any>}) => {

  const Article1 = content[0];
  const Article2 = content[1];
  const Article3 = content[2];
  const Article4 = content[3];
  const Article5 = content[4];
  const Article6 = content[5];

  return (
    <div className="DontMiss-container">
      <div className="dms-navbar">
        <div className="dms-heading red">Sports</div>
        <div className="dms-buttons">
          <div className="dms-all btn redbg">All</div>
          <div className="dms-Lifestyle btn purplebg">Football</div>
          <div className="dms-Vogue btn greenbg">Cricket</div>
          <div className="dms-Health&Fitness btn bluebg">Basketball</div>
          <div className="dms-Travel btn goldbg">Badminton</div>
          <div className="dms-Gadget btn lightbluebg">Boxing</div>
          <div className="dms-World btn bluebg">Esports</div>
        
        </div>
      </div>
      <div className="dms-content">
        <div className="dms-left">
          <img
            src={Article1.urlToImage}
            alt="dmsl"
          />
          <div className="dmsl-head">
          {Article1.author} <span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          {Article1.title}     </div>
          <div className="dmsl-para lightText">
          {Article1.description}
          </div>
        </div>
        <div className="dms-right">
          <div className="dms-card">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article2.urlToImage}  alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article2.author} <span className="lightText">- 27 Dec 2020</span>
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
              {Article3.author} <span className="lightText">- 27 Dec 2020</span>
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
              {Article5.author} <span className="lightText">- 27 Dec 2020</span>
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
              {Article6.author} <span className="lightText">- 27 Dec 2020</span>
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
  )
}

export default Sports