import { fetchCountryDetails } from "./scripts/services/countryAPI";
import { fetchCityPicture } from "./scripts/services/unsplashAPI";
import { fetchWeather } from "./scripts/services/weatherAPI";
import { renderCountryDetails, renderPicture, renderWeatherDetails } from "./scripts/ui";

const handleSubmit = async ()=> {
    const searchTerm = cityInput?.value.trim();

    if(!searchTerm) return;
    
    try{
        const weatherDetails = await fetchWeather(searchTerm);

        const [countryDetails, cityPicture] = await Promise.all([
            fetchCountryDetails(weatherDetails.sys.country),
            fetchCityPicture(searchTerm)
        ]);
        renderWeatherDetails(weatherDetails);
        renderCountryDetails(countryDetails[0], weatherDetails.name);
        renderPicture(cityPicture.urls.regular, cityPicture.alt_description);
    }catch(error){
        console.error('Error: ', error);
    }
    
}

const cityInput = document.querySelector<HTMLInputElement>('#city-input');

const discoverBtn = document.getElementById('discover-btn');

discoverBtn?.addEventListener('click', handleSubmit);

