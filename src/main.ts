import { fetchWeather } from "./scripts/services/weatherAPI";

const handleSubmit = async ()=> {
    const searchTerm = cityInput?.value.trim();

    if(!searchTerm) return;
    
    try{
        const weatherDetails = await fetchWeather(searchTerm);
        console.log(`
            Humidity: ${weatherDetails.main.humidity}
            Temperature: ${weatherDetails.main.temp}
            Country Code: ${weatherDetails.sys.country}
            Weather Description: ${weatherDetails.weather[0].description}
            Weatcher Icon: ${weatherDetails.weather[0].icon}
            Wind Speed: ${weatherDetails.wind.speed}
            `);
    }catch(error){
        console.error('Error: ', error);
        
    }
    
}

const cityInput = document.querySelector<HTMLInputElement>('#city-input');

const discoverBtn = document.getElementById('discover-btn');

discoverBtn?.addEventListener('click', handleSubmit);

