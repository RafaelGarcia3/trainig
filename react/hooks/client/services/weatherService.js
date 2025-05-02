import axios from  'axios';

const api_key = '393c442065cf87f49e0ed1368b7c7098';

export async function fetchWeather(city) {
    if (!city) return null;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`;

    try {
        const response = await axios.get(url);
        return{success: true, data: response.data};
    } catch (error) {
        const status = error.response?.status;
        const message = error.response?.data?.message || error.message;
        return { success: false, error: `Error ${status || ''}: ${message}`};
    }
}
