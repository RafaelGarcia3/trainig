import React, { useState } from 'react';
import { fetchWeather } from '../../services/weatherService.js';
import './Weather.css'
import WeatherCard from './WeatherCard.jsx';

const api_key = '393c442065cf87f49e0ed1368b7c7098';

export default function Weather(){
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
                
        if(city !== ''){
            const response = await fetchWeather(city);
            if(response.success){
                setWeather(response.data);
            }else{
                alert(response.error);
                setWeather(null);
            }
        }
    }

    return(
        <div className='app'>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>               
                <input 
                    type='text'
                    placeholder='Type a city'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    required
                    pattern='\S+.*'
                    title='You cannot enter spaces'
                />                
                <button type='submit'>Search</button>
            </form>

            {weather!==null && <WeatherCard data={weather} />}

        </div>
    );

}