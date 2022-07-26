import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherData from "./WeatherData";
export default function Weather(props){
    const [weatherInfo, setWeatherInfo]=useState({ready:false});
    const [city, setCity]=useState(props.defaultCity);
    function handleResponse(response){
setWeatherInfo({
    ready:true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name
   
});
    }
    function handleCityChange(event){
      
      setCity(event.target.value);
    }
    function handleSubmit(event){
      event.preventDefault();
      
      search();
    }
    function search() {
        
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
      }
      if (weatherInfo.ready){
        return (
            <div>
                <form className="form-search" onSubmit={handleSubmit}>
                    <input type="search" className="search-city-input" placeholder="Find your city.." onChange={handleCityChange}/>
                    <button className="button-search-city">Search</button>
                </form>
            <WeatherData data={weatherInfo}/>
            </div>
        );
      }
      else{
        search();
        return "Loading..";
      }
    
}