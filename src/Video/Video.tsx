import './Video.css'
import videoasset from '../assets/Videoass.png'

const Video = () => {
  return (
    <div className="DontMiss-container">
      <div className="dms-navbar">
        <div className="dms-heading red">Video</div>
        <div className="dms-buttons" >
          <div className="dms-all btn redbg">All</div>
          <div className="dms-Lifestyle btn purplebg">Travel</div>
          <div className="dms-Vogue btn greenbg">Recipies</div>
          <div className="dms-Health&Fitness btn bluebg">Health & Fitness</div>
          <div className="dms-Travel btn goldbg">Music</div>
 
        </div>
      </div>
      <div  className="dms-content">
      <div  className="Entertainment-image relative">

        <div className="playbutton">
        <span className="material-symbols-outlined">
play_arrow
</span>
        </div>
        <div className='Circle'>
      
        </div>
        <img src={videoasset} alt="image" />
      <div className="text-small   font3vh">Craig Bator <span className="lightText">- 27 Dec 2020</span></div>
      <div className="text-large   font5vh">Play This Game for Free on Epic Store
This Weekend</div>
      </div>
 
        
      </div>
    </div>
  )
}

export default Video