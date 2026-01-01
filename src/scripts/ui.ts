import { type CountryData, type WeatherData } from './types';
export const renderPicture = (url: string, description: string | null): void => {
    const pictureElement = document.getElementById('city-picture');
    pictureElement?.setAttribute('data-alt', description || '');
    pictureElement?.setAttribute('style',`background-image: url(${url||''});`);
}

export const renderCountryDetails = (countryDetails: CountryData, cityName: string) => {
    const cityTitle = document.getElementById('city-title');
    cityTitle? cityTitle.textContent = `${cityName}, ${countryDetails.name.common}` : '';

    const flagContainer = document.getElementById('flag-container');
    flagContainer?.setAttribute('style', `background-image: url('${countryDetails.flags.svg}'); background-size: cover; background-position: center;`);

    const countryName = document.getElementById('country-name');
    countryName? countryName.textContent = countryDetails.name.common : '';

    const countrySubregion = document.getElementById('country-subregion');
    countrySubregion? countrySubregion.textContent = countryDetails.subregion : '';

    const countryPopulation = document.getElementById('country-population');
    countryPopulation? countryPopulation.textContent = countryDetails.population.toLocaleString() : '';

    const countryCurrency = document.getElementById('country-currency');
    const {name, symbol} = Object.values(countryDetails.currencies)[0];
    countryCurrency? countryCurrency.textContent = `${name} (${symbol})` : '';
}

export const renderWeatherDetails = (weatherDetails: WeatherData) => {
    const temperatureElement = document.getElementById('temperature');
    temperatureElement? temperatureElement.textContent = `${Math.floor(weatherDetails.main.temp-273.15)} ºC` : '';

    const descriptionElement = document.getElementById('weather-description');
    descriptionElement? descriptionElement.textContent = weatherDetails.weather[0].description : '';

    const humidityElement = document.getElementById('humidity');
    humidityElement? humidityElement.textContent = `${weatherDetails.main.humidity}%` : '';

    const windElement = document.getElementById('wind');
    windElement? windElement.textContent = `${(weatherDetails.wind.speed * 1.60934).toFixed(2)} km/h` : '';

    const iconElement = document.getElementById('weather-icon');
    iconElement? iconElement.setAttribute('style', `background-image: url('http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png'); background-size: cover; background-position: center;`) : '';
}