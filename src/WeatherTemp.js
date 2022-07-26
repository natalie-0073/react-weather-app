import React, {useState} from "react";
export default function WeatherTemp(props){
    const [unit, setUnit]=useState('celsius');
    function showFahrenheit(event){
event.preventDefault();
setUnit('fahrenheit');
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit('celsius');

    }
    if(unit==='celsius'){
    return (
        <div>
    <div className="current-temperature">{Math.round(props.celsius)}&deg;C</div>
    <div className="temperatures">
        <span><a href="/" onClick={showFahrenheit} className="small-link">{Math.round((props.celsius*9/5)+32)}&deg;F</a></span>
    </div>
    </div>);
    }
    else{
      return (
        <div>
    <div className="current-temperature">{Math.round((props.celsius*9/5)+32)}&deg;F</div>
    <div className="temperatures">
        <span><a href="/" onClick={showCelsius} className="small-link">{Math.round(props.celsius)}&deg;C</a></span>
    </div>
    </div>);
    }
}