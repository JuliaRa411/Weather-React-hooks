 

 import React, { useState } from 'react'
 import axios from 'axios'
 
 
import './App.css';
 
  
 function App() {
   const [data, setData] = useState([])
   const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
 
   
   const searchLocation = (event) => {
     if (event.key === 'Enter') {
       axios.get(url).then((response) => {
         setData(response.data)
         console.log(response.data)
       })
       setLocation('')
     }
    }
   return (
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
         
          <div className="location"> <p>{new Date().toDateString("en-US")}  </p> 
       
     
          </div>
          <div className="location">
          <p>{new Date().toLocaleTimeString()}</p>
       
          </div>
          {/* Date */}
         

           <div className="location">
             <p className="name">{data.name}</p>
           
           </div>

                   <div className="temp">
             {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
             

           </div>
        
           <div className="description">
             {data.weather ? <p>{data.weather[0].main}</p> : null}
           
           </div>
           <div className="description">

         

           <img className="city-icon"
              src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt={data.weather[0].icon}"               
            />
                          
              
         

 
 
 
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


</div>
 


   );
   

 }
 
 export default App;