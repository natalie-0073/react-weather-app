import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(props){
    function handleResponse(response){
console.log(response.data);
    }
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    const apiKey = "ef6474d7c06b8fcbb3388c0963600854";
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    return (
        
            <div className="row">
                <div className="col-2">
                    <div>Thu</div>
                    <WeatherIcon code="01n" size={45} />
                    <div>
                        <span>19&deg;</span>
                        <span>10&deg;</span>
                    </div>
                </div>
                
                
            </div>
        
    );
}