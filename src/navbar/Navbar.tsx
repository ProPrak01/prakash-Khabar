import {useState,useEffect, SetStateAction} from 'react';
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube_3670147.png";

import "./Navbar.css";
import axios from 'axios';

const Navbar = ({breakingNews}: any) => {


  
  const [weatherData, setWeatherData] = useState<WeatherData>({});
    const [mylocation, setLocation] = useState(null);
  const [_error, setError] = useState(null);


  interface WeatherData {
    current?: {
      temp_c: number;
      condition: {
        text: string;
        icon: string;
      };
    };
    location?: {
      name: string;
    };
  }

  

  useEffect(() => {
    const fetchLocation = async (latitude: number, longitude: number) => {
      try {
        const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
          params: {
            q: `${latitude}+${longitude}`,
            key: 'd45bd8161d284aaaa7be6f168ada5765'
          }
        });
        const place = response.data.results[0].formatted;
        setLocation(place);
        const fetchweather = async () => {
          try {
            const response = await axios.get('http://api.weatherapi.com/v1/current.json',{
              params: {
                key: 'c9ef802b900a4bd591080700242704',
                q: `${mylocation}`
              }
            });
            setWeatherData(response.data);
            console.log(response.data)
          } catch (err) {
           
          }
        };
      
        fetchweather();
      } catch (err) {
        setError(err as SetStateAction<null>);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocation(latitude, longitude);
           
        },
        (_err) => setError(null)
      );





    } else {
      setError(null);
    }
  }, []);



  // useEffect(()=>{
  //   const fetchweather = async () => {
  //     try {
  //       const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=c9ef802b900a4bd591080700242704&q=Bihar')
  //       setWeatherData(response.data);
  //       console.log(response.data)
  //     } catch (err) {
       
  //     }
  //   };
  
  //   fetchweather();
      
  // },[])


const { current } = weatherData;


var today = new Date()
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = daysOfWeek[today.getDay()];


const monthsOfYear = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];
const currentMonth = monthsOfYear[today.getMonth()];


// if (error) return <p>Error: {error.message}</p>;
// if (!location) return <p>Loading...</p>;
  return (
    <div className="Navbar-container">
      <div className="navdata">
      <div className="weather">{current?.temp_c} &#176;C</div>
        <div className="place">
          {mylocation}</div>
        <div className="date">  
        <span style={{marginRight:"0.4vh"}} className="material-symbols-outlined">schedule</span>
         <div className="text">{currentDay}{" "}{today.getDate()}  {" "} {currentMonth} {" "} {today.getFullYear()}
</div>
          </div>
        <div className="BreakingNewsTag">Breaking News</div>
        <div className="BreakingNews">
  <div className="marquee">
    <p>
      {breakingNews.description} {"........"}
    </p>
    <p>
    {breakingNews.description}{".........."}
    </p>
  </div>
</div>
      </div>
      <div className="socialmedia">
        <a className="sm-a" href='https://www.facebook.com/'> <img  src={facebook} alt="" height={40} /></a>
       
       <a className="sm-a" href='https://www.x.com/'><img src={twitter} alt="" height={40} /></a> 
       <a className="sm-a" href='https://www.youtube.com/'> <img src={youtube} alt="" height={40} /></a>
      </div>
    </div>
  );
};

export default Navbar;
