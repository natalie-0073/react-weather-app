import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
export default function Weather(props){
    const [weatherInfo, setWeatherInfo]=useState({ready:false});
    function handleResponse(response){
        
setWeatherInfo({
    ready:true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      iconUrl:"http://openweathermap.org/img/wn/10d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name
});
    }
    function search() {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
      }
      if (weatherInfo.ready){
        return (
            <div>
                <form className="form-search">
                    <input type="search" className="search-city-input" placeholder="Find your city.."/>
                    <button className="button-search-city">Search</button>
                </form>
            <div className="content">
            
                <div className="row context align-items-center">
                    <div className="col-6 info">
                        <h1>{props.defaultCity}</h1>
                        <h6><FormattedDate date={weatherInfo.date}/></h6>
                        <img src={weatherInfo.iconUrl} alt={weatherInfo.description} />
                        <h5 className="weather-description">{weatherInfo.description}</h5>
                    </div>
                    <div className="col-6">
                        <div className="current-temperature">{Math.round(weatherInfo.temperature)}&deg;C</div>
                        <div className="temperatures">
                            <span className="max-temp">31&deg; / </span><span className="min-temp">10&deg;</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
      }
      else{
        search();
        return "Loading..";
      }
    
}