import React from 'react';

export default function WheaterCard( {data} ){
    return(
        <div className='card'>
            <h1> {Math.round(data.main.temp)}°C </h1>
            <p> {data.weather[0].description} </p>
            
            <p> <b> {data.name}, {data.sys.country} </b> </p> 

            <ul>
                <li> Feels like: {Math.round(data.main.feels_like)}° </li>
                <li> Humidity: {data.main.humidity}% </li>
                <li> Wind: {data.wind.speed} m/s </li>
            </ul>

        </div>
    );
}