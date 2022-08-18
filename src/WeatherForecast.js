import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);
    
    useEffect(()=>{
       setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response){
console.log(response.data);
setForecast(response.data.daily);
setLoaded(true);
    }
    
    if(loaded){ 
        
        
        return (
            <div className="row">
                {forecast.map(function (dailyForecast, index){
            if(index<6){
                return (
                    <div className="col-2" key={index}>
                        <WeatherForecastDay data={dailyForecast}/>
                        </div>
                );
            }
            else{
                return null;
            }
        })}
            
            </div>
            
    );
    }
   
        else{
            let latitude=props.coordinates.lat;
        let longitude=props.coordinates.lon;
        const apiKey = "ef6474d7c06b8fcbb3388c0963600854";
            let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        return null;
            }
           
    
}