 import { useState,useEffect } from 'react';
 import './App.css';

function App() {

  const [data, setData] = useState( )
  const [location, setLocation] = useState("london")



  
useEffect(() =>{
  getWeather();
},[location])


 
 const getWeather = (async () =>{
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1bc7dff5c3a7aa89ab5cd008afeeb609`);
    const data = await response.json()
    console.log(data)
 
  })
 
 
const locationSearch =(e) =>{
console.log(e.target.value) //  option to see all changes from users
}

  return (
    <div className="container">
    <form onSubmit>
    <input className='search' placeholder='Enter Location' type="text" onChange={locationSearch} > 
    </input>
  </form>
   </div>
    
    
  );
}

export default App;
