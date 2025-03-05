import React,{useEffect, useRef, useState} from 'react'
import searchicon from './searchicon.jpg';
import humidity from './humidity.png';
import windsped from './windspeed.png';
import clearicon from './clearicon.png';
import rainicon from './rainicon.png';
import cloudicon from './cloudicon.png';
import drizzleicon from './drizzileicon.png';

const weather = () => {
  const inpuref=useRef();
  const allicons={
    "01d":clearicon,
    "01n":clearicon,
    "02d":cloudicon,
    "02n":cloudicon,
    "03d":cloudicon,
    "03n":cloudicon,
    "04d":drizzleicon,
    "04n":drizzleicon,
    "09d":cloudicon,
    "09n":cloudicon,
    "10d":cloudicon,
    "13n":cloudicon,
    "13d":rainicon,
    "13n":rainicon,
  }
  const [weatherdata,setweatherdata]=useState(false);
    async function search(city){
    if(city===""){
        alert("Enter city name");
        return;
    }
    try{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
        const response=await fetch(url);
        const data=await response.json();

        if(!response.ok){
            alert("city not found");
        }

        console.log(data);
        const icon=allicons[data.weather[0].icon] || clearicon;
        setweatherdata({
            humidity: data.main.humidity,
            windspeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            icon:icon
        })
    }
    catch (error){
         setweatherdata(false);
         console.error("errror in fetching data")
    }
  }
  useEffect(()=>{
    search("");
  },[])
  return (
    <div className='font-serif place-self-center rounded-4xl flex flex-col items-center bg-[#2f4680] w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700] mx-auto p-5'>
        <div className='w-full flex flex-row items-center justify-center p-4 rounded-lg bg-[#2f4680]'>
            <input className='mr-3 outline-none h-12 sm:h-14 md:16 w-full max-w[250px] sm:max-w-[300px] md:max-w-[350] lg:max-w-[400px] rounded-lg border-none pl-5 text-lg sm:text-xl bg-[#ebfffc]' ref={inpuref} type="text" placeholder='Search' onKeyDown={(e)=>{if(e.key==="Enter"){search(inpuref.current.value);}}}/>
            <img className='w-12 sm:w-14 md:w-16 rounded-full bg-[#ebfffc] cursor-pointer p-2' src={searchicon} alt="search" onClick={()=>search(inpuref.current.value)} /> 
        </div>
        {weatherdata ? <>
        <img className='h-24 sm:28 md:h-32 w-24 sm:w-28 md:w-32 my-4 mb-10' src={weatherdata.icon} alt="weather" />
        <p className='text-4xl text-white sm:tex-5x1 md:text-6x1 font-bold'>{weatherdata.temperature} °C</p>
        <p className='text-white text-2xl sm:text-3xl md:text-4xl mt-2'>{weatherdata.location}</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
            
            <div className="flex flex-col items-center">
              <img className="w-10 sm:w-12 md:w-14" src={humidity} alt="Humidity" />
              <p className="text-white text-2xl sm:text-xl md:text-2xl">{weatherdata.humidity}%</p>
              <p className="text-white text-2xl sm:text-md">Humidity</p>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-10 sm:w-12 md:w-14" src={windsped} alt="Wind Speed" />
              <p className="text-white text-2xl sm:text-xl md:text-2xl">{weatherdata.windspeed} km/h</p>
              <p className="text-white text-2xl sm:text-md">Wind Speed</p>
            </div>

          </div>
        </>:<></>
        }
    </div>
  );
};

export default weather