import { cities } from "./scripts/data/data";
import { fetchCountryDetails } from "./scripts/services/countryAPI";
import { fetchCityPicture } from "./scripts/services/unsplashAPI";
import { fetchWeather } from "./scripts/services/weatherAPI";
import { renderCountryDetails, renderPicture, renderWeatherDetails } from "./scripts/ui";

const loadCity = async (givenCity?: string)=> {
    let cityName: string | undefined;
    givenCity?
        cityName = givenCity
        : cityName = cityInput?.value.trim();
    

    if(!cityName) return;
    
    try{
        const weatherDetails = await fetchWeather(cityName);

        const [countryDetails, cityPicture] = await Promise.all([
            fetchCountryDetails(weatherDetails.sys.country),
            fetchCityPicture(cityName)
        ]);
        renderWeatherDetails(weatherDetails);
        renderCountryDetails(countryDetails[0], weatherDetails.name);
        renderPicture(cityPicture.urls.regular, cityPicture.alt_description);
    }catch(error){
        console.error('Error: ', error);
    }
}

const loadRandomCity = () => {
    const randomIndex = Math.floor(Math.random()*(cities.length-1));
    loadCity(cities[randomIndex]);
}

const cityInput = document.querySelector<HTMLInputElement>('#city-input');

const discoverBtn = document.getElementById('discover-btn');
discoverBtn?.addEventListener('click', ()=> loadCity());

const surpriseMeBtn = document.getElementById('random-city-btn');
surpriseMeBtn?.addEventListener('click', loadRandomCity);

document.addEventListener('DOMContentLoaded', loadRandomCity);