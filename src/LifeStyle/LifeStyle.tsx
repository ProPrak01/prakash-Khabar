import './LifeStyle.css'

const LifeStyle = ({content}: {content: Array<any>}) => {
  const Article1 = content[0];
  const Article2 = content[1];

  return (
    <div className="DontMiss-container">
      <div className="dms-navbar">
        <div className="dms-heading red">Science</div>
        <div className="dms-buttons" >
          <div className="dms-all btn redbg">All</div>
          <div className="dms-Lifestyle btn purplebg">Travel</div>
          <div className="dms-Vogue btn greenbg">Recipies</div>
          <div className="dms-Health&Fitness btn bluebg">Health & Fitness</div>
          <div className="dms-Travel btn goldbg">Music</div>
 
        </div>
      </div>
      <div style={{gap:"11vh"}} className="dms-content">
        <div className="dms-left">
          <img
            src={Article1.urlToImage}
            alt="dmsl"
          />
          <div className="dmsl-head">
          {Article1.author}<span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          {Article1.title}       </div>
          <div className="dmsl-para lightText">
          {Article1.description} 
          </div>
        </div>
        <div className="dms-left">
          <img
            src={Article2.urlToImage}
            alt="dmsl"
          
          />
          <div className="dmsl-head">
          {Article2.author} <span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          {Article2.title}         </div>
          <div className="dmsl-para lightText">
          {Article2.description}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LifeStyle