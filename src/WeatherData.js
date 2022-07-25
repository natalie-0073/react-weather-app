import React from "react";

import FormattedDate from "./FormattedDate";
export default function WeatherData(props){
    return (
<div className="content">
                <div className="row context align-items-center">
                    <div className="col-6 info">
                        <h1>{props.data.city}</h1>
                        <h6><FormattedDate date={props.data.date}/></h6>
                        <img src={props.data.iconUrl} alt={props.data.description} />
                        <h5 className="weather-description">{props.data.description}</h5>
                    </div>
                    <div className="col-6">
                        <div className="current-temperature">{Math.round(props.data.temperature)}&deg;C</div>
                        <div className="temperatures">
                            <span className="max-temp">31&deg; / </span><span className="min-temp">10&deg;</span>
                        </div>
                    </div>
                </div>
            </div>
)}