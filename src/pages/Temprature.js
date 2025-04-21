import React, { useEffect, useState } from 'react'

export const Temprature = () => {
    const [weather,setWeather]=useState([]);
  const fetchWeather=async()=>{  const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=0c411f40befeef26e2b5f44f8d91e486
    `);
    const response=await weather.json();
    setWeather(response.result);
};
useEffect(()=>{
    fetchWeather();
},[]);
console.log(weather)
  return (
    <div>
        {weather && weather.map(( )=>(
            <h1></h1>
        ))}

    </div>
  )
}
