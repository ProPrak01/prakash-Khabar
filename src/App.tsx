import Ad from './Ad/Ad'
import './App.css'
import holding from './assets/pkhabar-holding.png'
import Dontmiss from './DontMiss/Dontmiss'
import Entertainment from './Entertainment/Entertainment'
import GetLU from './GetLatestUpdates/GetLU'
import Header from './Header/Header'
import LifeStyle from './LifeStyle/LifeStyle'
import News from './News/News'
import Recent from './Recent/Recent'
import Sports from './Sports/Sports'
import Stayconnected from './StayConnected/Stayconnected'
import Navbar from './navbar/Navbar'
import Video from './Video/Video'
import Footer from './Footer/Footer'
import Holding from './InstagramFollowUs/Holding'
function App() {
 

  return (
    <div className='Container bebas-neue-regular'>
      <Navbar/>
      <Header/>
      <News/>
      <div className="DMR">
      <Dontmiss/>
      <Recent/>
      </div>
      
      <Entertainment/>
      <div className="DMR">
      <Sports/>
      <Stayconnected/>
      </div>
      <div className="DMR">
      <LifeStyle/>
      <GetLU/>
      </div>
      <div className="DMR">
      <Video/>
      <Holding/>
      </div>
      <Footer/>
      
      

    </div>
  )
}

export default App
