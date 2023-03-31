import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState , useEffect } from 'react';
import axios from 'axios';
// 'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=825162764da3a5b116301ebe099a54ee'

function Extras(){
    const [weather, setWeather] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.83&lon=-117.91&exclude=hourly,daily&appid=825162764da3a5b116301ebe099a54ee');
        console.log(response.data)
        setWeather(response.data);
      };
       
      fetchData();
    }, []);
  

    if (weather) {
      return (
        <div>
            {weather.current.weather[0].description}
            {weather.current.temp}

        </div>)
    } else {
      return null;
    }
}

export default Extras;