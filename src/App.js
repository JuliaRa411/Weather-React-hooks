 import { useState,useEffect } from 'react';
 import './App.css';
import MyWeatherComponent from './MyWeatherComponent';

 function App() {

  
  
  const [mySearch, setMySearch] = useState("") // доступ к enter
  const [location, setLocation] = useState("london")
  const [myWeather, setMyWeather] =useState([]) // отображаем погоду
  


  useEffect(async() =>{
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1bc7dff5c3a7aa89ab5cd008afeeb609`) ;
   const data = await response.json();
   console.log(data)
   setMySearch(data)  // Пишет OBJECT в графе поиск
      },[location])
  
   


   const myWeatherSearch =(e)=>{
    console.log(e.target.value)
    
     } 
     

    
      

  return (
    <div className="container">
    <form>
    <input className='search' placeholder='Enter location' type="text" onChange={myWeatherSearch} value={mySearch} > 
    </input>
   
  </form>
<div className='btn'> 
  <button> Submit</button>
 
  </div> 
  
   {mySearch.map(element => (
    <MyWeatherComponent /> 
     ))
     }
      
 
  
    </div> 
  
  );
}

export default App;