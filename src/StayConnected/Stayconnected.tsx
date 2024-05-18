import './Stayconnected.css'
import twitterx from '../assets/twitterx.png'
import youtube from '../assets/youtubex.png'
import insta from '../assets/instax.png'
import fb from '../assets/facebookx.png'
import Ad from '../Ad/Ad'

const Stayconnected = () => {
  return (
    <div className='Recent-container'>
    <div className="dms-navbar  mb2vh">
     <div className="dms-heading red fontsize1o6vh">Stay Connected</div>
   </div>
     <div className="accounts">
      <div className="acccard fb">
        <img className="acccard-img"  src={fb} alt="" height={50}/>
        <span className='acccard-text'>Facebook</span>
      </div>
      <div className="acccard yt">
      <img  className="acccard-img" src={youtube} alt="" height={50}/>
      <span className='acccard-text'>Youtube</span>
      </div>
      <div className="acccard insta">
      <img  className="acccard-img" src={insta} alt="" height={50}/>
      <span className='acccard-text'>Instagram</span>
      </div>
      <div className="acccard twitter">
      <img  className="acccard-img" src={twitterx} alt="" height={50}/>
      <span className='acccard-text'>Twitter</span>
      </div>

     </div>

       
  <Ad/>
 </div>
  )
}

export default Stayconnected