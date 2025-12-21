import type { WeatherData } from "./scripts/types";
import { fetchWeather } from "./services/api";

const weather: WeatherData = await fetchWeather('sant celoni');
console.log(weather.main.temp);