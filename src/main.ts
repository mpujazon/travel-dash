import { fetchCountryDetails } from "./scripts/services/countryAPI";
import { fetchCityPicture } from "./scripts/services/unsplashAPI";
import { fetchWeather } from "./scripts/services/weatherAPI";
import { renderPicture } from "./scripts/ui";

const handleSubmit = async ()=> {
    const searchTerm = cityInput?.value.trim();

    if(!searchTerm) return;
    
    try{
        const weatherDetails = await fetchWeather(searchTerm);

        const [countryDetails, cityPicture] = await Promise.all([
            fetchCountryDetails(weatherDetails.sys.country),
            fetchCityPicture(searchTerm)
        ]);
        

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
        
        console.log(`
            City Picture Data
            Description: ${cityPicture.alt_description}
            Urls: ${cityPicture.urls.regular}
            `);
        renderPicture(cityPicture.urls.regular, cityPicture.alt_description);
    }catch(error){
        console.error('Error: ', error);
    }
    
}

const cityInput = document.querySelector<HTMLInputElement>('#city-input');

const discoverBtn = document.getElementById('discover-btn');

discoverBtn?.addEventListener('click', handleSubmit);

