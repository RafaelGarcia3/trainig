const api_key = '393c442065cf87f49e0ed1368b7c7098';

export async function fetchWeather(city) {
    if (!city) return null;

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}&units=metric`
        );
        const data = await response.json();

        if (data.cod === 200) {
            return { success: true, data };
        } else {
            return { success: false, error: `Error ${data.cod}: ${data.message}` };
        }
    } catch (error) {
        return { success: false, error: 'Error getting weather: ' + error.message };
    }
}
