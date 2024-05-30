import './Entertainment.css'
const Entertainment = ({content}: {content: Array<any>}) => {
  const Article1 = content[0];
  const Article2 = content[1];
  const Article3 = content[2];
  const Article4 = content[3];



  return (
    <div className='Entertainment-container'>
        <div className="dms-navbar">
        <div className="dms-heading red">Entertainment</div>
        <div className="leftRight">
          <div className="leftBox">
          <span className="material-symbols-outlined">
arrow_back_ios
</span>
          </div>
          <div className="rightBox">
          <span className="material-symbols-outlined">
arrow_forward_ios
</span>
          </div>

        </div>
      </div>
      <div  className="Entertainment-image">
        <img src={Article1.urlToImage} alt="image" />
      <div className="ent-text-small hovereff">{Article1.author}</div>
      <div className="ent-text-large hovereff">{Article1.title}</div>
      </div>



      <div className="ent-card-container">
      <div className="dms-card mxw45">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article2.urlToImage} alt="dmsr-img" />
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
          <div className="dms-card mxw45">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article3.urlToImage} alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article3.author}  <span className="lightText">- 27 Dec 2020</span>
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
          <div className="dms-card mxw45">
            <div className="dmsr-card-main">
            <div className="dms-card-img">
              <img src={Article3.urlToImage}  alt="dmsr-img" />
            </div>
            <div className="dms-card-contnet">
              <div className="dms-card-subheading">
              {Article3.author}  <span className="lightText">- 27 Dec 2020</span>
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
      </div>
    </div>
  )
}

export default Entertainment