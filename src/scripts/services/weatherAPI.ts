import type { WeatherData } from "../types";

const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (city: string) :Promise<WeatherData> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}