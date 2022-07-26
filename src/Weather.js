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
    coordinates: response.data.coord,
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
        
        const apiKey = "ef6474d7c06b8fcbb3388c0963600854";
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
                
            <WeatherData data={weatherInfo} />
            
            <footer className="fixed-bottom"><a href="https://github.com/natalie-0073/react-weather-app.git" target="_blank" rel="noreferrer">Open-source</a> code by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nataliia-chala0073/">Nataliia Chala</a></footer>
            </div>
        );
      }
      else{
        search();
        return "Loading..";
      }
    
}