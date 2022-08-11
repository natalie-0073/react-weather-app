import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast(){
    return (
        
            <div className="row">
                <div className="col-2">
                    <div>Thu</div>
                    <WeatherIcon size={45} code="01n"/>
                    <div>
                        <span>19&deg;</span>
                        <span>10&deg;</span>
                    </div>
                </div>
                
                
            </div>
        
    );
}