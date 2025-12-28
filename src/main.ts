import { fetchCountryDetails } from "./scripts/services/countryAPI";
import { fetchWeather } from "./scripts/services/weatherAPI";
import type { CountryData } from "./scripts/types";

const handleSubmit = async ()=> {
    const searchTerm = cityInput?.value.trim();

    if(!searchTerm) return;
    
    try{
        const weatherDetails = await fetchWeather(searchTerm);
        const countryDetails = await fetchCountryDetails(weatherDetails.sys.country);

        console.log(`
            ${searchTerm} Weather
            Humidity: ${weatherDetails.main.humidity}
            Temperature: ${weatherDetails.main.temp}
            Country Code: ${weatherDetails.sys.country}
            Weather Description: ${weatherDetails.weather[0].description}
            Weatcher Icon: ${weatherDetails.weather[0].icon}
            Wind Speed: ${weatherDetails.wind.speed}
        `);
        

        console.log(`
            ${countryDetails[0].name.common} Details
            Flag SVG: ${countryDetails[0].flags.svg}
            Population: ${countryDetails[0].population}
            Subregion: ${countryDetails[0].subregion}
        `);

            
            
    }catch(error){
        console.error('Error: ', error);
        
    }
    
}

const cityInput = document.querySelector<HTMLInputElement>('#city-input');

const discoverBtn = document.getElementById('discover-btn');

discoverBtn?.addEventListener('click', handleSubmit);

