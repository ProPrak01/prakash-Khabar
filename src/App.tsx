import {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css'
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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [CurrentCountry, SetCurrentCountry] = useState("in");
  const [category, setCategory] = useState("")


  useEffect(() => {
    const fetchNews = async () => {
      // console.log(category);
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category:`${category}`,
            country: `${CurrentCountry}`,
            
            apiKey: '6d8c8ffb87294c559b23c02b3afd5052'
          }
        });
        setArticles(response.data.articles);
        
       // console.log(response.data.articles)
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNews();
  },[category,CurrentCountry]);
  


  
  if (loading) return(

    <div className='error bebas-neue-regular'>
    <h1 className='error-heading' style={{padding:"1vh "}}> Loading </h1>
   
   <div className="loader"></div>
   {/* <h4 className='creator'>Author :   Prakash</h4> */}
  </div>
  );
  if (error) return(
    <div className='error bebas-neue-regular'>
      <h1 className='error-heading'> {error.message} </h1>
     
     <div className="loader2"></div>
     {/* <h4 className='creator'>Author :   Prakash</h4> */}
    </div>
   
);
  // console.log(articles)
  return (
    <div className='Container bebas-neue-regular'>
      <Navbar breakingNews={articles[0]}/>
      <Header 
      setCategory={setCategory}
      
      SetCurrentCountry={SetCurrentCountry}
      />
      <News newsContent={articles}/>
      
      <div className="DMR">
      <Dontmiss  allNews={articles} setCategory={setCategory}/>
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
