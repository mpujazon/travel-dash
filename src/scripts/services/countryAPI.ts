import type { WeatherData } from "../types";

const fetchCountryDetails = async (countryCode: string): Promise<WeatherData> => {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Response status: ${response.status}`)
    }

    return await response.json();
}