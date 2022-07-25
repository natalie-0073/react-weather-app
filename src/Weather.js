import React from "react";
import "./Weather.css";
export default function Weather(){
    return (
        <div>
            <form className="form-search">
                <input type="search" className="search-city-input" placeholder="Find your city.."/>
                <button className="button-search-city">Search</button>
            </form>
        <div className="content">
        
            <div className="row context align-items-center">
                <div className="col-6 info">
                    <h1>San Francisco</h1>
                    <h6>September 25, 15:00</h6>
                    <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                    <h4 className="weather-description">Cloudy</h4>
                </div>
                <div className="col-6">
                    <div className="current-temperature">27&deg;C</div>
                    <div className="temperatures">
                        <span className="max-temp">31&deg; / </span><span className="min-temp">10&deg;</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}