import React from "react";
import WeatherTemp from "./WeatherTemp";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherData(props){
    return (
<div className="content">
    <div className="context">
                <div className="row align-items-center">
                    <div className="col-6 info">
                        <h1>{props.data.city}</h1>
                        <h6><FormattedDate date={props.data.date}/></h6>
                        <div>
                        <WeatherIcon code={props.data.icon} size={52}/>
                        </div>
                        <h5 className="weather-description">{props.data.description}</h5>
                    </div>
                    <div className="col-6">
                        <WeatherTemp celsius={props.data.temperature}/>
                    </div>
                </div>
                <WeatherForecast/>
    </div>
              
 </div>
)}