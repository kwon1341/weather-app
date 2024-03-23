import React from "react";


const WeatherBox = ({weather}) => {
    console.log("weather?",weather);
    const celsius = weather?.main.temp;
    const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
    const description = weather?.weather[0].description;
    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>{celsius}℃ / {fahrenheit}°F</h2>
            <h3>{description}</h3>
        </div>
    );
};

export default WeatherBox;
