import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";

function App() {
    const [weather,setWeather]= useState(null);
    const getCurrentLocation =()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            getWeatherByCurrentLocation(lat,lon)
        });
    };
    const getWeatherByCurrentLocation = async (lat,lon) =>{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=286bb517d7eaa000ca8b4ddbc8a0a897`
        let response = await fetch(url)
        let data = await response.json();
        setWeather(data)
        // console.log("data",data);
    };


    useEffect(() => {
        getCurrentLocation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div >
        <div className="container">
            <WeatherBox weather={weather}/>
            <WeatherButton/>
        </div>
    </div>
  );
}

export default App;
