 

 import React, { useState } from 'react'
 import axios from 'axios'
 import './App.css';
 import Gsap from './Gsap';
 
   function App() {
   const [data, setData] = useState([])
   const [location, setLocation] = useState('')
   const [sys,setSys] =useState('')
   const [icon, setIcon]= useState('')
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
   const iconUrl =`https://openweathermap.org/img/wn/${icon}@2x.png`
     
   const searchLocation = (event) => {
     if (event.key === 'Enter') {
       axios.get(url).then((response) => {
         setData(response.data)
         console.log(response.data)
         setSys(response.data.sys.country)
         setIcon(response.data.weather[0].icon)
       })
       setLocation('')
     }
    }
   return (
// bg change//
        <div className={   
      typeof data.main != "undefined"
                ? data.main.temp > 10
                  ? "App hot"
                  : "App cold"
                  : "App"
            }
     > 
      <div className="app">
      <div className="search">
      
         <input
           value={location}
           onChange={event => setLocation(event.target.value)}
           onKeyPress={searchLocation}
           placeholder='Enter city'
           type="text" />
          </div>
     
       <div className="container">
       <div className="top">
           
          <Gsap/>  
          
           <div className="location">
            <p className="name"> {data.name} {sys}</p> 
             </div>
             
            <div className="location"> </div>
                   <div className="temp">
             {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
              </div>
        
           <div className="description">
           {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>

           <div className="description">
           <div className="weather-icon">
          {/*  Changing weather icons */ }
                   <img src={iconUrl} alt ="" />  
          </div>
                 
          </div>
         {data.name !== undefined &&
           <div className="bottom">
             <div className="feels">
             <p>Feels Like</p>
               {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
             </div>
             <div className="humidity">
             <p>Humidity</p>
               {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              
             </div>
             <div className="wind">
             <p>Wind Speed</p>
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                          
            </div>
             </div>
         }
        </div>
        
       </div>
        {/*  Footer */ }
 <div className='decor'> <hr className="hr"/>  </div>
  
  <div className="creator">
   <h5 className="made">Made by Julia Rakityanska, 2022</h5>
 </div>
  <div className="social">
    <a href="https://ra411.glitch.me/" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"></path>
    </svg>
  </a>
  
    <a href="mailto:juliarakitianska@gmail.com" target="blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" className="bi bi-envelope-fill m-2" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
      </svg>
        
  </a>
    </div>
 </div>
 
    </div>
     
    
 
  );


   
  



   
 }
 
 export default App;
