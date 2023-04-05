import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import weatherApp from '../images/weather.jpeg'


function Weather() {
  const [weather, setWeather] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=33.83&lon=-117.91&appid=825162764da3a5b116301ebe099a54ee&units=metric'
      );
      setWeather(response.data);
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setFahrenheit(!fahrenheit);
  };

  if (weather) {
    const temp = fahrenheit ? (weather.main.temp * 9) / 5 + 32 : weather.main.temp;
    const unit = fahrenheit ? '°F' : '°C';

    return (
      <div className="weather">
        <div>
         WEATHER AT LEANFEAST LOS ANGELES 
         <br></br>
         <br></br>
          Current Weather: {weather.weather[0].description}
          <br />
          Current Temp: {temp.toFixed(1)}
          <button onClick={handleClick}>{unit}</button>
          <br />
          Current Humidity: {weather.main.humidity}%
        </div>
        <img src={weatherApp}/>
      </div>
    
    );
  } else {
    return null;
  }
}

export default Weather;
